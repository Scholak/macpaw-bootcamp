# MacPaw

## Important Notes
- Upload modal is not working. I tried to upload images using Insomnia App and I uploaded successfully but it's not working in my project. I couldn't figure out how to fix it.
- It should delete votes when image is clicked on likes, favorites and dislikes pages but it doesn't delete them. I also tried to delete votes on Insomnia App but it didn't work either.

## App Description 
The app displays the breed details. You can filter, search by name, order, limit, upload new breed image and vote them. 'The Cat Api' (https://thecatapi.com) used for the service and it requires authentication. You can register by your email and get your api key via email. 

## App Features
1. Responsive Design. 992px for tablet view and 576px for mobile view.
2. Dark Mode Support. You can switch the mode by clicking the button which is located on top middle of the page.

## App Url
https://macpaw-bootcamp-taupe.vercel.app/

## For Developers

### Tech Stack
- Next.js
- Typescript
- Module Scss

### Packages Used
- axios
- dayjs
- eslint
- react-dropzone
- react-icons
- react-query
- react-redux
- react-responsive-carousel
- react-toastify
- sass
- sharp

### External Services
- The Cat Api Service: https://thecatapi.com

### Installation Guide
1. Clone the project: `git clone https://github.com/Scholak/macpaw-bootcamp.git`
2. Install the dependencies `yarn install` or `npm install`
3. Create the `.env` file and add environment variables from `.env.example`
4. Run `yarn dev` or `npm run dev`
5. Visit http://localhost:3000 