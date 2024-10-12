import conf from "../conf/conf.js";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;
    constructor(){
        /**
         * The API client is a piece of software that facilitates communication between your application (the client) and a server (in this case, Appwrite’s server).
         *////so the client is frontend (client of whom, the backend, it deals with server  )
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwritePROJECT_ID);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);

    }

    async createPost({title,slug,content,featuredImg,status,userId}){
        try {
            const documentId=ID.unique();
            console.log(title,slug,content,featuredImg,status,userId,"documentId",documentId);
            const db = await this.databases.createDocument(conf.appwriteDATABASE_ID,conf.appwriteCOLLECTION_ID,slug,{

                title,
                content,
                featuredImg,
                status,
                userId

            },)
            console.log("createPost",db);
            return db
        } catch (err) {
            console.error(err);
            throw new Error("createPost",err);
            
        }
    }

    async updatePost(slug,{title,content,featuredImg,status}){
        try {
            const db = await this.databases.updateDocument(conf.appwriteDATABASE_ID,conf.appwriteCOLLECTION_ID,slug,{

                title,
                content,
                featuredImg,
                status,

            });
            return db
        } catch (err) {
            console.error(err);
        }
    }

    async deletePost(slug){
        try {
            const db = await this.databases.deleteDocument(conf.appwriteDATABASE_ID,conf.appwriteCOLLECTION_ID,slug);
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    async getPost(slug){
        try {
            const db = await this.databases.getDocument(conf.appwriteDATABASE_ID,conf.appwriteCOLLECTION_ID,slug);
            return db;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try {
            const db = await this.databases.listDocuments(conf.appwriteDATABASE_ID,conf.appwriteCOLLECTION_ID,queries);
            console.log("getPosts",db.documents);
            return db.documents;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    //////file upload services

    async uploadFile(file){
        try {
            const storage = await this.bucket.createFile(conf.appwriteBUCKET_ID,ID.unique(),file);
            return storage;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    async deleteFile(fileID){
        try {
            console.log("fileID-deleteFile-config",fileID);
            const fileCheck = await this.bucket.getFile(conf.appwriteBUCKET_ID,fileID);
        if(fileCheck.$id){
            const storage =fileCheck.$id&& await this.bucket.deleteFile(conf.appwriteBUCKET_ID,fileID);
            
            }else console.error("file does not exist");
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    previewFile(fileID){ 

        try {
            console.log("previewFile",fileID);
            if(!fileID)return `fileID is ${fileID}`;
            const storage =  this.bucket.getFilePreview(conf.appwriteBUCKET_ID,fileID);
            return storage;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
};


const service=new Service();
export default service;

