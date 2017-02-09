# Viewing

The app is available in 2 places:

##github pages
https://mbssantos.github.io/wiPro/  
They force SSL and unfortunately openweathermap *doesn't* support it.
Because of this you'll see an empty page.
To get content you'll need to 'enable unsafe content'.

## My VPS
http://139.59.161.205/  
I thought the above was a hassle so I've uploaded it to my VPS.  
You can see the app running smoothly there  
(I don't have a domain name for it yet!)

## installing
Clone the repo, cd to the folder and run
> npm i

## Dev server
As easy as typing:
> npm start

## Building

After installing run
> npm run build

This creates a _build_ folder pointing to the root of your file system.
Because of that you'll need to copy it to the actual root and run index.html from there.
Because I've setup github pages for this project it will show some extra info regarding that.
You can safely ignore it.
