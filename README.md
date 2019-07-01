# Upwork Evaluation App

This is a short evaluation designed to allow both parties to get a feel for what it would be like to work together. The following task is meant to to replicate a typical workflow, as well as letting you get a feel for our stack.

### Introduction

Currently, in the application that has been set up for you, Storybook is configured to run as the default UI. Please run the application and look at the included components that have been provided. Pay particular attention to the **Layout** components, `StyledView`, `Section`, `Container`, and `Block`.

You can see for yourself how they are used by viewing the code in each of their respective `*.pages.js` files in the `/components/UI/core/layout/` directory.

Additional explanation is also available in the wiki located on the original github repository [here](https://github.com/carecrew/upwork/wiki/Layout-Components).

After you are finished with the Storybook UI, you will need to alter the `config.json` file in the root diretory, setting `useApp` to `true`, and `useStoryBook` to `false`.

## Task

Build a two screen React Native application that sends a GraphQL query to a public API and and displays the resulting data on the next screen. Some components have been created for you, but you will have to build others from scratch. Use the wireframe, shown below, as guidance for how each screen should look.

Use [this](https://github.com/carecrew/upwork/issues/2) issue from the original repository as a starting point. As you work, please replicate normal workflow by creating a branch for each issue with the following naming convention:

```
component/upwork-###-issue_name

eg. component/upwork-115-create_button_component
```

Additionally, please include the issue number at the beginning of your commit messages.

```
eg. git commit -m "#115 - Create button component"
```

Merge your issue branches into your default branch as you go since we obviously don't have reviews on pull requests.

## Expectations

- The finished application should be able to run properly on both iOS and Android upon cloning your repository and running `react-native run-android/ios`.

- Patterns such as seperation of presentational code and business logic are expected. Use the render props pattern if applicable.

- Components that have already been given to you have been used/reused in some way.

- Any components you have created will be added to Storybook. This will require a small `*.pages.js` file alongside your component. Use the existing files as reference.

- Your editor is properly configured to make use of the eslint and prettier settings. If you are using vscode, see [this](https://github.com/carecrew/upwork/wiki/VSCode-Settings) page for potentially useful settings.

- Your commits are on point with useful messages. Your code will be reviewed so the more coherant each commit is, the better.

- No unecessary libraries are added to the project. The key libraries have already been provided. If you feel it is necessary to add an additional library to the project, please include justification in your secondary commit message:

```
git commit -m "#115 - Added lib" -m "Added lib because ... "
```

## Troubleshooting

If `react-native run-android` results in some kind of error, run `react-native start --reset-cache` in a seperate terminal and allow it to run you go about your business.
