#!/usr/bin/env bash

function out  {
  echo " "
  echo "==== *** *** ===== $1 ==**=="
  echo " "
}

out $PWD
ls -la

out "check npm version"
npm --version

out "install packages"
npm install

out "build for $BIMSERVER_ENVIRONMENT"
npm run dev
