import { Toaster } from 'react-hot-toast';
import { ToasterProps } from './toasterModal';

const CustomToster: React.FC<ToasterProps> = ({
  position,
  reverseOrder,
  gutter,
}) => {
  return (
    <>
      <Toaster
        position={position}
        reverseOrder={reverseOrder}
        gutter={gutter}
        toastOptions={{
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
          duration : 3000,
        }}
      />
    </>
  );
};

export default CustomToster;
