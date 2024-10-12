import conf from '../conf/conf.js';
import { Client, ID,Databases,Storage,Query } from "appwrite";

export class Service{     
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) 
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client); 
        this.bucket = new Storage(this.client); 
    }

    async createPost({title, slug, content, featuredImg,status,userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,slug,content,status,userId,featuredImg
            })
        } catch (e) {
            console.log(e);
            throw e;
            
        }
    };

    async updatePost( slug,{title, content, featuredImg,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImg,
                    status
                }
            );
        } catch (e) {
            console.log(e);
            throw e;
            
        }
    };


    async deletePost( slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (e) {
            console.log(e);
            throw e;
            // return false;
            
        }
    }

    async getPost( slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (e) {
            console.log(e);
            throw e;
            // return false;
            
        }
    }

    async getPosts(querries= [Query.equal("status", ["active"])]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                querries,
                100,
                
            );
        } catch (e) {
            console.log(e);
            throw e;
            // return false;
            
        }
    };

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),
            file
            )
        } catch (e) {
            console.log(e);
            throw e;
            
        }

    }

    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(conf.appwriteBucketId,
            fileId
            )
            return true
        } catch (e) {
            console.log(e);
            throw e;
            
        }

    }

    async getFilePreview(fileId){
        try {
            return await this.bucket.getFilePreview(conf.appwriteBucketId,
                fileId)
            
        } catch (e) {
            console.log(e);
            throw e;
            
        }
    }

};



const service =new Service();
export default service;