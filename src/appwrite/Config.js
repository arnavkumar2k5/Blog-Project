import Conf from '../Conf/Conf'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    Bucket;

    constructor(){
        this.client
        .setEndpoint(Conf.appwriteUrl)
        .setProject(Conf.appwriteProjectID)
        this.databases = new Databases(this.client)
        this.Bucket = new Storage(this.client)
    }

    async createPost({title, slug, featuredImage, content, status, userId}){
        try {
            return await this.databases.createDocument(
                Conf.appwriteDatabaseID,
                Conf.appwriteCollectionID,
                ID.unique(),  //IT IS USED FOR UNIQUE ID --> ID.unique()
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                    slug
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error)
        }
    }

    async updatePost(id, {title, content, slug,featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                Conf.appwriteDatabaseID,
                Conf.appwriteCollectionID,
                id,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    slug,
                }
                
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error)
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                Conf.appwriteDatabaseID,
                Conf.appwriteCollectionID,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error)
            return false;
        }
    }

    async getPost(id){
        try {
            return await this.databases.getDocument(
                Conf.appwriteDatabaseID,
                Conf.appwriteCollectionID,
                id
            );
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                Conf.appwriteDatabaseID,
                Conf.appwriteCollectionID,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service :: getPosts :: error", error)
            return false;
        }
    }

    async uploadFile(file){
        try {
            return await this.Bucket.createFile(
                Conf.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.Bucket.deleteFile(
                Conf.appwriteBucketID,
                fileId,
            )
            return true
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error", error)
        }
    }

    getFilePreview(fileId){
            return this.Bucket.getFilePreview(
                Conf.appwriteBucketID,
                fileId
            )
    }
}

const service = new Service();

export default service;