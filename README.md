
# STEPS


#### 1. Create App:

	- npx create-react-app <app_frontend> --template redux-typescript && npx express-generator <app_backend>
	- cd <app_backend> && npm build

#### 2. Set-up Docker:

	- Create a Dockerfile & .dockerignore for both client & server each
	- Create a docker-compose.yml in root of project

#### 3. Set up Git & NPM:

	- cd <app_frontend> && rm -rf .git*
	- cd <app_backend> && rm -rf .git*
	- git init && npm init
	- Create the "upRepo" npm script in the 'package.json' of the root directory
	- Create the "pushRepo" npm script in the 'package.json' of the root directory
	- Create the "start" npm script in the 'package.json' of the root directory

#### 4. Set up to be a PWA:

	- npx workbox-cli wizard (MAKE SURE SERVICE WORKER IS IN SAME DIRECTORY AS HTML FILE!!)
	- npx workbox-cli generateSW path/to/config.js
	- Edit HTML file & Server to handle PWA
	- Make sure there is a maskable icon in manifest.json
	- Make sure the viewport is properly set in HTML file
	- Make sure app satisfies all installability criteria

#### 5. Build & Run Container Orchestration:

	- npm run upRepo
	- start docker desktop
	- npm start

#### 6. Set up Github:

	- Add a LICENSE.txt file with the appropriate license
	- Set up a github repository
	- npm run upRepo
	- git remote add origin https://github.com/<Github_Username>/<Github_Repository_Name>.git
	- git branch -M main
	- npm run pushRepo (For future changes, ignore above two)