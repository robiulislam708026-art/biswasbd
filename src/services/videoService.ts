import { db } from '@config/firebase';
import { collection, addDoc, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { Video, VideoComment } from '@types/video.types';

class VideoService {
  async uploadVideo(video: Omit<Video, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'videos'), {
        ...video,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return docRef.id;
    } catch (error) {
      throw new Error(`Failed to upload video: ${error}`);
    }
  }

  async getVideos(category?: string): Promise<Video[]> {
    try {
      let constraints: any[] = [orderBy('createdAt', 'desc'), limit(20)];

      if (category) {
        constraints.unshift(where('category', '==', category));
      }

      const q = query(collection(db, 'videos'), ...constraints);
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as Video));
    } catch (error) {
      throw new Error(`Failed to fetch videos: ${error}`);
    }
  }

  async addVideoComment(videoId: string, comment: Omit<VideoComment, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, `videos/${videoId}/comments`), {
        ...comment,
        createdAt: new Date(),
      });
      return docRef.id;
    } catch (error) {
      throw new Error(`Failed to add comment: ${error}`);
    }
  }
}

export default new VideoService();
