# GoogleProject01

GO based server that serve Angular application

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[![GitHub license](https://img.shields.io/github/license/jasper22/google-project-01?style=plastic)](https://github.com/jasper22/google-project-01/blob/master/LICENSE)
[![Languages used](https://img.shields.io/github/languages/count/jasper22/google-project-01?style=plastic)]
[![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://github.com/jasper22/google-project-01/issues/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/jasper22/google-project-01/)
[![Go Report Card](https://goreportcard.com/badge/github.com/jasper22/google-project-01)](https://goreportcard.com/report/github.com/jasper22/google-project-01)

## Getting Started
   
   * Clone repository

    ```
    git clone --recurse-submodules https://github.com/jasper22/google-project-01.git
    ```
   
   * Build Docker image

   ```
   scripts\build-docker.cmd (on Windows platform) or script\build-docker.sh (on Linux platform)
   ```

   * Run Docker image

   ```
   docker run --detach --rm -p 8080:8080 show-movies@latest
   ```

   * Open your favorite browser to: [http://localhost:8080](http://localhost:8080)

### Prerequisites

#### Git

   Linux:
   ```
   apt-get install git
   ```
   
   Windows:

   Download from [https://git-scm.com/](https://git-scm.com/)


#### Go

   Linux:
   Follow the instructions from official web site: [golang.org](https://golang.org/doc/install#tarball)
   
   (I tryed to use `snap install go` on Ubuntu - sometimes it cause a lot of strange errors in package installing)

   Windows:
   Follow the instrations on official web site: [golang.org](https://golang.org/doc/install#windows)

#### Angular 8

   1. Install node.js
        Linux: 
        a. Install with snap: [nodejs.com](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions-enterprise-linux-fedora-and-snap-packages)
    
        b. Install with tarball: [github.com/nodesource](https://github.com/nodesource/distributions/blob/master/README.md)

       Windows:
       Follow the instructions from official web page: [nodejs.com](https://nodejs.org/en/download/package-manager/#windows) 

   2. Install Angular CLI globally

   ```
   npm i -g @angular/cli@latest
   ```

#### Docker

   Linux:

   Follow the instruction on official site: [docker.com](https://docs.docker.com/v17.09/engine/installation/linux/docker-ce/ubuntu/)

   Windows:

   Follow the instruction on official site: [docker.com](https://hub.docker.com/?overlay=onboarding)

## Running the tests

TODO

### Break down into end to end tests

TODO

### And coding style tests

TODO

## Deployment

TODO

## Built With

* [GO](https://golang.org/)
* [Angular](https://angular.io/)
* [Project layout](https://github.com/golang-standards/project-layout)

## Contributing

TODO

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/jasper22/google-project-01/tags). 

## Authors

TOTO

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

TODO
