import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default async function confirmAction(title: any, content: any) {
    return new Promise((resolve, reject) => {
      confirmAlert({
        title: title,
        message: content,
        buttons: [
          {
            label: 'OK',
            onClick: () => resolve(true),
          },
          {
            label: 'Cancel',
            onClick: () => resolve(false),
          },
        ],
      });
    });
  }