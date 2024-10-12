const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwritePROJECT_ID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDATABASE_ID:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCOLLECTION_ID:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBUCKET_ID:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tiny_mce_api_key:String(import.meta.env.VITE_TINY_MCE_API_KEY)
};
// console.log(conf);

export default conf;