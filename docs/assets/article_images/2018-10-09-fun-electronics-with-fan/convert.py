import subprocess
import sys


filename = str(sys.argv[1])

print("File name: {filename}.mp4".format(filename=filename))

ogvFormat = "ffmpeg -i {filename}.mp4 -c:v libtheora -c:a libvorbis -q:v 10 -q:a 10 {filename}.ogv".format(filename=filename)
webmFormat = "ffmpeg -i {filename}.mp4 -vcodec libvpx -acodec libvorbis {filename}.webm".format(filename=filename)

print("Convert {filename}.mp4 to {filename}.ogv".format(filename=filename))

subprocess.call(ogvFormat, shell=True)

print("Convert {filename}.mp4 to {filename}.webm".format(filename=filename))

subprocess.call(webmFormat, shell=True)

print("Success!")

