!#/usr/bin/env -S sh
echo "Saving new records 🧐"
git config --global user.email "rimuhrimu@protonmail.com"
git config --global user.name "RimuhRimu"
git add ./lib/records.json
git commit -m "Update indexes"
git push
echo "Commits Done and pushed 🎊"
