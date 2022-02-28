import toast from 'react-hot-toast';


export const showToast = (message: any) => {
  toast.remove();
  message &&
    toast(message, {
      style: {
        background: '#333',
        color: '#fff',
      },
    });
};