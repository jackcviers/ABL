# ABL - A Better Loader

ABL (pronounced \ˈā-bəl\) is A Better Loader for EcmaScript/JavaScript. It loads JavaScript in the most efficient, non-blocking way possible, and allows for dependency management (A.js depends on B.js, B.js depends on D.js, D.js depends on C.js) and allows for code that executes document.write to inject scripts.

## Why another script loader?

There are so many great loaders out there: RequireJS, LABjs, Controljs, etc. that you may ask why we need another one.

1. document.write() is not handled well by any of the ones I know of.
2. I dislike the Requirejs module boilerplate, and TMK it doesn't handle document.write() in a robust way.
3. LABjs has dependency management, but requires that you list your dependencies in the correct order.
4. Controljs is strictly a loader, without any dependency management, and handles document.write() in a non-robust way.
5. I wanted to write a better loader to make loading JS faster, like ControlJS; executing loaded scripts in the correct order better, like LABjs; JavaScript dependency management easier, like Requirejs; while at the same time handling the corner cases of document.write() execution better, and removing the need to know the load order.
6. I really just wanted to play around with something.

## Work in progress...

ABL is just starting out as a project. In fact there isn't anything written yet. However, once it is in a decent state, feel free to fork and download for your own use. I'm releaseing the code under the MIT license, so you can use it in commercial and OSS projects for free. There isn't a project homepage yet, or a list of tasks to finish.

## About the .project file
I use Aptana Studio 3 to edit the project, so there is a .project file included with the source. Feel free to use it as well.

## Dependencies
There are no dependencies for the project at this time or, hopefully, in the future, but handling the document.write() overloading may require a separate set of modules, since parsing HTML cannot be reliably done via RegExes. I hope to tackle that part first, but if you know of a good html5 compliant js parsing library ( the only robust one I found is for Node ), hit me up with an issue here, I'll take a look at it.

## In the future
Snippits to load ABL, and minimzed versions of the scripts will be available, along with any deployment instructions.

## LICENSE
Copyright (c) 2011 Jack Viers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.ß 