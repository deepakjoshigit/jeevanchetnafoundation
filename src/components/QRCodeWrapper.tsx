import React from 'react';
import { QRCode as OriginalQRCode, QRCodeProps } from 'qrcode.react';

const QRCodeWrapper: React.FC<QRCodeProps> = (props) => {
  return <OriginalQRCode {...props} />;
};

export default QRCodeWrapper;