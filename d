warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 24f91f4..7716284 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -4877,6 +4877,11 @@[m
         "regexp.prototype.flags": "^1.2.0"[m
       }[m
     },[m
[32m+[m[32m    "deep-freeze": {[m
[32m+[m[32m      "version": "0.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/deep-freeze/-/deep-freeze-0.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-OgsABd4YZygZ39OM0x+RF5yJPoQ="[m
[32m+[m[32m    },[m
     "deep-is": {[m
       "version": "0.1.3",[m
       "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",[m
[36m@@ -5389,6 +5394,14 @@[m
       "resolved": "https://registry.npmjs.org/entities/-/entities-2.2.0.tgz",[m
       "integrity": "sha512-p92if5Nz619I0w+akJrLZH0MX0Pb5DX39XOwQTtXSdQQOaYH03S1uIQp4mhOZtAXrxq4ViO67YTiLBo2638o9A=="[m
     },[m
[32m+[m[32m    "equals": {[m
[32m+[m[32m      "version": "1.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/equals/-/equals-1.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha1-ISBi3eXhpRDZVfE1mO/MamIbas4=",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "jkroso-type": "1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "errno": {[m
       "version": "0.1.8",[m
       "resolved": "https://registry.npmjs.org/errno/-/errno-0.1.8.tgz",[m
[36m@@ -9496,6 +9509,11 @@[m
         }[m
       }[m
     },[m
[32m+[m[32m    "jkroso-type": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/jkroso-type/-/jkroso-type-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-vEztbWxF/gdFKCuvyGqfjE/JzmE="[m
[32m+[m[32m    },[m
     "js-tokens": {[m
       "version": "4.0.0",[m
       "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",[m
[36m@@ -12217,6 +12235,25 @@[m
       "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",[m
       "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="[m
     },[m
[32m+[m[32m    "pure-react-carousel": {[m
[32m+[m[32m      "version": "1.27.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pure-react-carousel/-/pure-react-carousel-1.27.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-k5ueXSL2Of4OyyfoJJwAJ0X3VY0n7pYfuamq+hMTYNV7eEF1iNrPVsjvmpTtMjaKsLyM6SkmSpP2XWQcvaFIGw==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/runtime": "^7.5.5",[m
[32m+[m[32m        "deep-freeze": "0.0.1",[m
[32m+[m[32m        "deepmerge": "^2.2.1",[m
[32m+[m[32m        "equals": "^1.0.5",[m
[32m+[m[32m        "prop-types": "^15.6.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "deepmerge": {[m
[32m+[m[32m          "version": "2.2.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-2.2.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-R9hc1Xa/NOBi9WRVUWg19rl1UB7Tt4kuPd+thNJgFZoxXsTz7ncaPaeIm+40oSGuP33DfMb4sZt1QIGiJzC4EA=="[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "q": {[m
       "version": "1.5.1",[m
       "resolved": "https://registry.npmjs.org/q/-/q-1.5.1.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 15e1001..30b416d 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -7,6 +7,7 @@[m
     "@testing-library/react": "^11.2.6",[m
     "@testing-library/user-event": "^12.8.3",[m
     "axios": "^0.21.1",[m
[32m+[m[32m    "pure-react-carousel": "^1.27.6",[m
     "react": "^17.0.2",[m
     "react-dom": "^17.0.2",[m
     "react-scripts": "4.0.3",[m
