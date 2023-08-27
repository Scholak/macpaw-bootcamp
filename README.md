# MacPaw Bootcamp Task

## Important Notes
- Upload modal is not working. I tried to upload images using Insomnia App and I uploaded successfully but it's not working in my project. I couldn't figure out how to fix it.
- It should delete votes when image is clicked on likes, favorites and dislikes pages but it doesn't delete them. I also tried to delete votes on Insomnia App but it didn't work either.
- I saw your insturcions about commiting after finished the project. Therefore I wasn't able to apply conventional commits specification rules. Sorry for that. That's my mistake but I'm really willing to learn these specification rules (I checked the rules, also visited the https://github.com/hraboviyvadim and inspected themacpaw-ui repo for commit conventions. By the way 1,820 contributions in the last year? That's insane. More than all commits that I created in my life :D )

## App Description 
The app displays the breed details. You can filter, search by name, order, limit, upload new breed image and vote them. 'The Cat Api' (https://thecatapi.com) used for the service and it requires authentication. You can register by your email and get your api key via email. 

## App Features
1. Responsive Design. 992px for tablet view and 576px for mobile view.
2. Dark Mode Support. You can switch the mode by clicking the button which is located on top middle of the page.

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

### SSR / SSG Note
I could fetch api in react server components and display loader by creating loading.tsx but I used react query to handle api calls because I feel more comfortable with react query and the package provider more than just data fetching like caching, query invalidating, error handling and more. I used SSR / SSG approach in one of my repos (https://github.com/Scholak/note-app). It also includes testing with vitest and react-testing library. You can visit the repo :)

### Testing Note
I know testing (unit tests, mocking, mock service worker etc.) but I don't have enough time to implement it. I Just have like 3-4 days to implement these features. Therefore I focused on parts in 'As a plus' section to increase get hired change. But if I had enough time, I would install necessary packages and create tests cases for each component. 

### Installation Guide
1. Clone the project: `git clone https://github.com/Scholak/macpaw-bootcamp.git`
2. Install the dependencies `yarn install` or `npm install`
3. Create the `.env` file and add environment variables from `.env.example`
4. Run `yarn dev` or `npm run dev`
5. Visit http://localhost:3000 