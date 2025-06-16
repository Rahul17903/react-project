import conf from '../conf/conf'
import { Client,ID, Databases,Storage,Query } from 'appwrite'
export class Service{
    client  = new Client()
    databases
    buckets
    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.client)
        this.buckets = new Storage(this.client)
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {title,content,featuredImage,status,userId}
            )
        } catch (error) {
            console.log("createPost : : ", error)
        }
        
    }

    async uploadPost(slug,{title, content, featuredImage, status }){
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {title,content,featuredImage,status,}
            )
        } catch (error) {
            console.log("uploadpost :: ",error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("delete post : :" ,error)
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        
        } catch (error) {
            console.log("GetPost :: ", error)
            
        }
    }
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries
            )
        
        } catch (error) {
            console.log("getPosts error : ", error)
            return false
            
        }
    }

    async uploadFile(file){
        try {
            return await this.buckets.createFile(
                conf.appWriteBucketId,
                ID.unique(),file
            )
        } catch (error) {
            console.log("uploadFile error" , error)
        }
    }
    async deleteFile(fileId){
        try {
            await this.buckets.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("deletefile of error", error)
            return false
        }
    }
    getFilePreview(fileId){
        return this.buckets.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }
}
const service = new Service()
export default service