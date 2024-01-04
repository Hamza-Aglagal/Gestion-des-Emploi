import toast, { Toaster } from 'react-hot-toast';



export const notifyWarning   = (text) => {
    // toast.error(text);
    toast(text, {
        duration: 4000,
        position: 'top-center',
        // Styling
        style: { backgroundColor:'#F9731A',color:'white', width:'15rem' },
        className: '',
        // Custom Icon
        icon: '❗❕',
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });

}


export const notifySuccess   = (text) => {
    // toast.error(text);
    toast(text, {
        duration: 4000,
        position: 'top-center',
        // Styling
        style: { backgroundColor:'#30F088',color:'white', width:'19rem' },
        className: '',
        // Custom Icon
        icon: '❗❕',
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });

}
