import React,{useCallback} from 'react';
import { useForm } from 'react-hook-form';
import {Input,Button,Select,RTE}from "../index.js";
import appwriteService from '../../appwrite/config.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




export default function PostForm({post}) {
    const {register,handleSubmit,watch,setValue,control,getValues}=useForm(
        {
            defaultValues:{
                title:post?.title||'',
                slug:post?.slug||'',
                content:post?.content||'',
                status:post?.status||'active',

        }
    }
    );
    const navigate=useNavigate();
    const userData=useSelector((state)=>{
        const userData=state?.auth?.userData;
        console.log("userData",userData);
        return userData;
    });
    console.log("userData",userData);

    const submit=async(data)=>{
        console.log("submit",data);
        
        if(post){
            const file=data.image[0]?await appwriteService.uploadFile(data.image[0]):null;
            if(file){
                appwriteService.deleteFile(post.featuredImg)
            }
            const dbPost=await appwriteService.updatePost(
                post.$id,{
                    ...data,
                    featuredImg:file?file.$id:undefined,
                    
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                    }
                }
            )
        }else if(!post){
            const file=data.image[0]?await appwriteService.uploadFile(data.image[0]):null;

            if(file){
                console.log("userData",userData);
                const fileId=file.$id;
                data.featuredImg=fileId;
                const create=await appwriteService.createPost({
                    ...data,
                    userId:userData?.$id,
                
                })
                if(create){
                    navigate(`/post/${create.$id}`)
                }
            }

        }
    }

    const slugTransform=useCallback(value=>{
        if(value&&typeof value === 'string'){
            // const slug = value.toLowerCase().replace(/ /g, '-');
            // setValue('slug',slug);
            // return slug;
            ///////////////////////////////////
            return value
            .trim()
            .toLowerCase()
            .replace(/\b(\w+)\b/g, '$1-')
            .replace(/\s+/g, '-')
        }
        return '';

    },[])

    React.useEffect(() => {
        const subscription=watch((value,{name})=>{
            if(name==='title'){
                setValue('slug',slugTransform(value.title,{
                    shouldValidate:true
                }))
            }
        });

        return ()=>{
            subscription.unsubscribe();
        }

    },[watch,slugTransform,setValue])
  return (
    <form onSubmit={handleSubmit(submit)}
    className='flex-wrap flex'>

    <div className="w-2/3 px-2">
    <Input
    label="Title: "
    placeholder="Title"
    className="mb-4"
    {
        ...register("title",{
            required: true,})}
    />
    <Input
    label="Slug: "
    placeholder="Slug"
    className="mb-4"
    {
        ...register("slug",{
            required: true,})}
    onInput={(e)=>{
        setValue("slug", slugTransform(e.currentTarget.value),{shouldValidate: true});
        
    }}
    />
    <RTE 
    label="Content: " name="content" control={control} defaultValue={getValues("content")}
    />

</div>
<div className="w-1/3 px-2">
    <Input
    label="Featured Image :"
    type="file"
    className="mb-4"
    accept="image/png, image/jpeg, image/jpg, image/gif"
    {
        ...register("image",{
            required: !post,})}
    />
    {
        post&&(
            <div className="w-10 mb-4">
                <img 
                src={
                    appwriteService
                    .previewFile(post.featuredImg)}
                alt={post.title}
                className='rounded-lg w-10 h-10'
                /> 

            </div>
        )
    }
    <Select
    options={["active", "inactive"]}
    label="Status"
    className="mb-4"
    {...register("status",{required:true})}

    />

    <Button
    type="submit"
    bgColor={post?"bg-green-500":undefined}
    className="w-10"
    >
        {post?"Update":"Submit"}
    </Button>
</div>
</form>
  )
}

// export default PostForm