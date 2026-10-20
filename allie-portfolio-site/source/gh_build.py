import re,base64,sys,os
src=sys.argv[1]; dst=sys.argv[2]
d=os.path.dirname(src)
s=open(src).read()
mt={'jpg':'image/jpeg','png':'image/png','webp':'image/webp','svg':'image/svg+xml','woff2':'font/woff2','mp4':'video/mp4'}
def rep(m):
    q=m.group(1); f=m.group(2)
    p=os.path.join(d,f)
    if not os.path.exists(p): return m.group(0)
    ext=f.rsplit('.',1)[1]
    return q+'data:'+mt[ext]+';base64,'+base64.b64encode(open(p,'rb').read()).decode()+q
s=re.sub(r'(["(])([\w.-]+\.(?:jpg|png|webp|svg|woff2|mp4))(?=[")])',lambda m:rep(m)[:-1] if m.group(1)=='(' else rep(m)[:-1],s)
open(dst,'w').write(s)
print(dst, os.path.getsize(dst)//1024,'KB', 'unresolved:', re.findall(r'(?:src="|url\()([\w.-]+\.(?:jpg|png|webp|svg|woff2|mp4))',s))
