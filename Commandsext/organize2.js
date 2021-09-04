let fs=require('fs');

let path =require('path');
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}
function organizeFunction(srcPath)
{
    let entities=fs.readdirSync(srcPath);
    
    let organizedFolder=path.join(srcPath,'organizedFiles');
    
    if(!fs.existsSync(organizedFolder))
    {
        fs.mkdirSync(organizedFolder);
    }
    for(let i=0;i<entities.length;i++)
    {
        let file=entities[i];
        if(entities[i]=="organizedFiles")
        {
            continue;
        }
        let temppath=path.join(srcPath,file);
        if(fs.lstatSync(temppath).isFile())
        {
            let type=checktype(file);
            let typeFolder=path.join(organizedFolder,type);
            if(!fs.existsSync(typeFolder))
            {
                fs.mkdirSync(typeFolder);
            }
            let src=path.join(srcPath,entities[i]);
            let dest=path.join(typeFolder,entities[i]);
            fs.copyFileSync(src,dest);
        }
        else{
            console.log(temppath);
            organizeFunction(temppath);
        }
     }
    
}
function checktype(file)
    {
        for(let type in types)
        {
            for(let ext of types[type])
            {
                if(path.extname(file).split('.')[1]==ext){
                    return type;
                }
            }
        }
        return 'others';
    }
module.exports={
    organizeFun:organizeFunction
};



// let fs=require('fs');
// let path=require('path');
// function organizeFunction(srcPath)
// {
//     let dir=path.join(srcPath,'OrganizedFiles');
//     if(!fs.existsSync(dir))
//     {
//         fs.mkdirSync(dir);
//     }
//     let arr=fs.readdirSync(srcPath);
//     for(let i=0;i<arr.length;i++)
//     {
//         let fpath=path.join(srcPath,arr[i]);
//         let ext=path.extname(fpath);
//         if(arr[i]=="OrganizedFiles")
//         {
//             continue;
//         }
//         if(ext==".mp4" || ext==".mp3" || ext==".mov")
//         {
//             reqpath=path.join(dir,'media');
//             if(!fs.existsSync(reqpath))
//             {
//                 fs.mkdirSync(reqpath);
//             }
//             let pathfile=path.join(reqpath,arr[i]);
//             fs.copyFileSync(fpath,pathfile);
//         }
//         else if(ext==".docx" || ext==".xlsx" || ext==".pdf" || ext==".doc")
//         {
//             reqpath=path.join(dir,'document');
//             if(!fs.existsSync(reqpath))
//             {
//                 fs.mkdirSync(reqpath);
//             }
//             let pathfile=path.join(reqpath,arr[i]);
//             fs.copyFileSync(fpath,pathfile);
//         }
//         else if(ext==".png" || ext==".jpeg" || ext==".jpg")
//         {
//             reqpath=path.join(dir,'pictures');
//             if(!fs.existsSync(reqpath))
//             {
//                 fs.mkdirSync(reqpath);
//             }
//             let pathfile=path.join(reqpath,arr[i]);
//             fs.copyFileSync(fpath,pathfile);
//         }
//     }
// }
// module.exports={
//     organizeFun:organizeFunction
// };