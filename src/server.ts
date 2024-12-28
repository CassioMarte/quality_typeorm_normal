import {createApp} from './app'


createApp()
   .then((app)=>{

     app.listen(process.env.PORT || 3000, () => {
    console.log("Running on welcome");
  });
   }).catch((err)=>{
    console.error('Error initializing the app:', err);
    process.exit(1)
   })

 