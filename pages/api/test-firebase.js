import { storage } from '../../lib/firebase';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';

export default async function handler(req, res) {
  try {
    const storageRef = ref(storage, 'test/test.txt');
    await uploadString(storageRef, 'Hello, QuillQuest!');
    const url = await getDownloadURL(storageRef);
    res.status(200).json({ url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}