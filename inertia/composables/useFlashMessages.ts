import { ref, watch } from 'vue';

export const useFlashMessages = () => {
  const messages = ref<string[]>([]);
  const currentMessage = ref<string | null>(null);
  
  const addMessage = (message: string) => {
    messages.value.push(message);
  };

  watch(messages, (newMessages) => {
    if (!currentMessage.value && newMessages.length > 0) {
      currentMessage.value = newMessages.shift() || null;
      setTimeout(() => {
        currentMessage.value = null;
      }, 5000);
    }
  });

  return {
    currentMessage,
    addMessage
  };
};