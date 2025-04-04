import '@/app/_styles/global.css';
import HomeLayout from '@/app/HomeLayout.jsx';

// export const metadata = {
//   title: 'My App',
//   description: 'This is a sample app',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}