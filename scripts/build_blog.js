const fs = require('fs');
const path = require('path');
const md = require('marked');
const src = path.join(process.cwd(),'content','blog');
const out = path.join(process.cwd(),'public','blog_html');
if(!fs.existsSync(out)) fs.mkdirSync(out,{recursive:true});
fs.readdirSync(src).forEach(file=>{
  if(file.endsWith('.md')){
    const m = fs.readFileSync(path.join(src,file),'utf8');
    const html = md.parse ? md.parse(m) : require('marked')(m);
    const name = file.replace('.md','.html');
    fs.writeFileSync(path.join(out,name),'<!doctype html><html><head><meta charset="utf-8"><title>'+name+'</title></head><body>'+html+'</body></html>');
  }
});
console.log('Built blog_html');
