export default function generateRandomID() {
  let timestamp = new Date().getTime();
  const uniqueID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const randomValue = (timestamp + Math.random() * 16) % 16 | 0;
    timestamp = Math.floor(timestamp / 16);
    return (c === 'x' ? randomValue : (randomValue & 0x3 | 0x8)).toString(16);
  });
  return uniqueID;
}