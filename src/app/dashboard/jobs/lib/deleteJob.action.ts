"use server";


import { revalidatePath } from 'next/cache';
import { Agent, setGlobalDispatcher } from 'undici'

const agent = new Agent({
  connect: {
    rejectUnauthorized: false
  }
})

setGlobalDispatcher(agent)

export const handleDeletePath = async (id: string, token: string) => {
  try {
    const response = await fetch(`https://api.loubby.ai/api/v1/employer/listing/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    } );

    if (!response.ok) {
      
      const errorData = await response.json();
      console.error('Failed to delete job:', errorData);
      return undefined;
    }

    const data = await response.json();
    console.log('Delete response:', data);

    // Revalidate the path after a successful delete operation
    revalidatePath('/dashboard/jobs');

    return data;
  } catch (error) {
    console.error('Error deleting job:', error);
    return undefined;
  }
};
