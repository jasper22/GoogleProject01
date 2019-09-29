#!/bin/bash

# Check if hydra is running
# -x flag only match processes whose name (or command line if -f is
# specified) exactly match the pattern. 

if pgrep -x "hydra" > /dev/null
then
    echo "Already running"
else
    echo "Hydra will start up for quick-dev.co.il domain"
    echo "with configuration file from /configs/hydra-config.yaml"
    ../internal/hydra/hydra serve all --config ../configs/hydra-config.yaml
fi
