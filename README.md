Hello!  Welcome to the GuideCX End-to-End(E2E) automation framework.
This framework assists in frontend automation of acceptance criteria and functional use-cases.

Setup:
1. Install Homebrew: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
2. Install NVM: `brew install nvm`
   1. Ensure you complete setup by adding the following to your `~/.zshrc`: `export NVM_DIR="$HOME/.nvm"
      [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
      [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion`
   2. Either close and open a new terminal or source your shell: `source ~/.zshrc`
   3. Verify nvm is working by getting the version: `nvm -v`
3. Install Node: `nvm install 16`
4. Install Typescript: `npm install --save-dev typescript`
5. Install Cypress: `npm install cypress --save-dev`

Cypress:
1. Open Cypress: `npx cypress open`
2. Run Cypress and report to dashboard: `npx cypress run --record --key 83f05b9c-7baf-43da-af7a-131b8b49ef3c`
3. Monitor the dashboard here: https://dashboard.cypress.io/projects/zueq92/runs


Difficulties / Missing Functionality / Limitations: 
1. I found that some toast messages are disappearing too quickly to craft a locator from the DOM in order to run sufficient checks, normally I would work with a developer to identify the element or figure out how to add the correct break points, but as it is I have spent too much time on it and none of my DOM tricks have worked in helping me locate these elements. 