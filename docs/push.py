import shutil
import os
import sys
message=sys.argv[1]

basePath=os.path.dirname(os.path.realpath(__file__))
source = basePath
dest1 = os.path.join(basePath,"docs")


files = os.listdir(source)
for f in files:
    if f in ['.git','.gitignore','docs']:
        continue
    shutil.move(os.path.join(source,f), dest1)
os.system("git add .")
os.system('git commit -m "{msg}"'.format(msg=message))
os.system("git push -u origin master")
files = os.listdir(dest1)
for f in files:
    shutil.move(os.path.join(dest1,f), source)