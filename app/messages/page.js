import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';
import { unstable_noStore } from 'next/cache';

// export const revalidate = 5;


// Ne pas mettre en cache sur l'ensemble du fichier
//export const dynamic = 'force-dynamic';


export default async function MessagesPage() {
  // Ne pas mettre en cache juste sur ce module
 // unstable_noStore();
 // const response = await fetch('http://localhost:8080/messages'/*, {
  //  next :{
   //   revalidate: 5,
   // }
  //}*/ );
  // messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
