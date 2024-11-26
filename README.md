This is a test project. It is not intended for production. 😉

## How to run

This is basically an init of Next.js. So, first run `yarn install` and then `yarn dev`. You'll be good using npm if you like it.

Open [http://localhost:5174/events](http://localhost:5174/events) with your browser to see the result. This is not the default port, you can change it at `"dev": "next dev -p 5174"` in `package.json` if needed.

## Structure Highlights

```md
app
├── api
│ ├── events // endpoints related to events
├── components // some abstractions I have made
├── events // core of the application
│ ├── new // add new event page
│ ├── [id] // edit some event page
│ ├── (view) // I did use this to group all components used to view the list of events on the main page
│ │
│ ├── page.tsx // list all events
│ ├── form.tsx // just the fields for create/edit
│ ├── mapper.ts // utility to parse data
└─── template // I did use this folder to group stuff related to the app's layout
```
