dataPath=$(fvtt configure get "dataPath");
dataPath+="/Data/modules"
echo "$dataPath"
echo $PWD
ln -s "$PWD" "$dataPath"