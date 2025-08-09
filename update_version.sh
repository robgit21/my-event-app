#!/bin/bash

# Hole den Namen des aktuellen Branches
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Überprüfe, ob wir uns im main-Branch befinden
if [ "$current_branch" == "main" ]; then
  # Hole den Namen des gemergten Branches
  merged_branch=$(git log -1 --pretty=%B | head -n1 | sed 's/.*Merge branch //;s/ into.*//')

  # Bestimme den Typ der Versionserhöhung basierend auf dem Branch-Namen
  if [[ $merged_branch == *"major"* ]]; then
    npm version major -m "Upgrade to %s [skip ci]"
  elif [[ $merged_branch == *"minor"* ]]; then
    npm version minor -m "Upgrade to %s [skip ci]"
  elif [[ $merged_branch == *"patch"* ]]; then
    npm version patch -m "Upgrade to %s [skip ci]"
  else
    echo "No version bump needed for branch $merged_branch"
    exit 0
  fi

  # Push der neuen Tags zum Remote-Repository
  git push origin --tags
  git push
fi
