# Get Started with Pieces OS and the @pieces.app/pieces-os-client npm package

Follow this guide to get an early look at using Pieces OS in your own development environment. You can use this to get familiar with some key terms and endpoints: `assets`, `asset`, `connect`, `format`, `formats`, and `create`. There are other topics that are touched on, and further expansion on this starter project is coming soon.

[![npm version](https://badge.fury.io/js/@pieces.app%2Fpieces-os-client.svg)](https://badge.fury.io/js/@pieces.app%2Fpieces-os-client)

See the NPM package here:
- [https://www.npmjs.com/package/@pieces.app/pieces-os-client](https://www.npmjs.com/package/@pieces.app/pieces-os-client)

Read our Current Documentation:
- [https://docs.pieces.app](https://docs.pieces.app)

## Table of Contents

- [Operating System Support](#operating-system-support)
- [Installing](#installing)
  - [Pieces OS](#pieces-os)
  - [Downloading NPM Package](#downloading-npm-package)
- [Running Your Project](#running-your-project-for-the-first-time)
- [Creating a Copilot](#creating-a-copilot)
- [Connecting Your Application](#connecting-your-application)
  - [Use Pieces.QGPTStreamInput](#use-piecesqgptstreaminput)
  - [Receive QGPT Answers](#receiving-answers-with-piecesqgptquestionanswer)
- [Connecting your Application](#connecting-your-application)
- [Pieces.AssetApi() & Pieces.AssetsApi()](#getting-started-with-piecesassetapi--piecesassetsapi)
  - [Create New Asset Using Pieces.AssetsApi().assetsCreateNewAsset()](#piecesassetsapiassetscreatenewasset)
- [Get Asset Snapshot](#get-assets-snapshot-piecesassetsapiassetssnapshot)
- [Update a Snippets Data](#using-piecesassetapiassetupdate-to-rename-snippet)
- [Refresh Your assetsSnapshot()](#refresh-your-snapshot)
- [Delete an Asset](#delete-using-piecesassetsapiassetsdeleteasset)
- [Search your Assets](#use-piecessearchapi)

## Operating System Support

Currently, Pieces OS is utilized as the primary backend service with Pieces for Developers that powers all the features that can be used there. Both programs are designed for full support by all operating systems, although our Linux Platform is available, it leans towards a 'heavily supported beta' and may experience incremental issues on specific flavors of linux.


## Configuration & Setup with NPM

You can choose to follow the following steps to configure your project by hand, or you can use `npx create-react-app <your-app-name>` instead.

## Installing
When developing on the Pieces platform, you need two primary things:

1. **Download the Pieces OS application**
2. **Install the npm package**

## Pieces OS
Pieces OS runs in the background of your computer and serves as a hub for all plugins and extensions developed by the team. In order to utilize your own Server locally and support all the functionality that powers things like [Global Search](https://docs.pieces.app/features/global-search), [Copilot Chats](https://docs.pieces.app/features/pieces-copilot), [Asset Saving](https://docs.pieces.app/features/managing-saved-materials), [context](https://docs.pieces.app/features/pieces-copilot#set-your-own-copilot-context), and more.

Select the right version to download Pieces OS for your operating system:
- [macOS](https://docs.pieces.app/installation-getting-started/macos) - [Compatible with macOS 11 Big Sur or higher]
- [Windows](https://docs.pieces.app/installation-getting-started/windows) - [Compatible with Windows 10 version 1809 or higher]
- [Linux](https://docs.pieces.app/installation-getting-started/linux) - [Compatible with Ubuntu 18 or Higher]

You can also visit our user facing documentation to learn more about different features that are available now to give you an idea of some of the things that you can potentially do.

## Installing Node using NVM

To install the current version of `node`, simply run the command:

```bash
nvm install --lts
```

To check what version of `node` that's currently running on your machine, run the command:

```bash
node --version
```

To install a specific version of `node`, you can run the command:

```bash
nvm install [version-of-node]
```

To switch between different versions of `node`, you can run the command:

```bash
nvm use [version-of-node]
```

`npm` comes installed when you use `nvm` to install `node`.


## Downloading NPM Package

Using npm:

```bash
npm install @pieces.app/pieces-os-client
```

Using pnpm:

```bash
pnpm add @pieces.app/pieces-os-client
```

After you install the package, you  can import the library into your file(s) using `require`:

```js
const pieces = require('@pieces.app/pieces-os-client')
```

or you can import the package using `import` as well:

```js
import * as pieces from '@pieces.app/pieces-os-client'
```

> **Recommendation**
> The order that npm packages are saved and added to your dependencies is important and will affect your installation flow. **This slowed me down for quite a bit.**
>
> **If you are having issues with your installation, it is likely due to a conflict in Typescript versions - `npm uninstall typescript` - then go back and perform all other npm installations before reinstalling typescript again**.

You can get it here: [GitHub Repo](https://github.com/pieces-app/example-typescript)

## Creating a Project from Scratch
Let's get started with the base of your new React project! We will do this by learning more about manipulating Pieces OS and creating our own assets locally on device. First, we will create a directory for you project along with some dependancy setup:

1. Create a directory for your project called <copilot-project> (or the name of your choice)
2. Open up a Terminal at the root of that directory, and run `npm uninstall typescript` to ensure you are starting fresh
  - (optional) run `nvm install --lts` to check your  version of Node
3. From that same terminal window, use the `prefix` parameter in your installation command to install your dependencies: `npm install --prefix ./ @pieces.app/pieces-os-copilot`

4. Install Dependencies with NPM with these three commands:
```bash
npm install typescript && npm install ts-node

# Useful types package
npm install -D tslib @types/node
```

5 (optional) additional npm packages

```bash 
npm install @types/react && npm install @types/react-dom

npm install react && npm install react-dom && npm install react-scripts
```

6. Add these scripts into your `package.json` to help with development, and be sure to save after adding them:

```json
{ 
  "scripts": {
    "dev": "ts-node index.tsx",
    "clean": "rm -r node_modules && rm package-lock.json",
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}
```

> **Don't Forget**
> You can run any script that you add here via `npm run <your-script>`. For example to run "start" you would simple run `npm run start`

## Setting up your `public` Directory
Next you can go ahead and create a new directory called `public` that will hold your `index.html` file where your entry point exists. Create the file inside of public and save it there. You do not have to add anything to the `index.html` file at this time, as we will come back to this later. If you would like, you can add the following as a placeholder for now:

```html
<!DOCTYPE html>  
<html lang="en">  

</html>
```

## Setting up your `src` Directory
Now that the initial `.html` file has been created, you can start to work on your src directory and getting the rest of your core files added to the project.

Inside the `src` directory, add two files:
- **`singleton.ts`** - single instance container for a few global functions and features
- **`index.tsx`**- where the core info is and where we are going to be spending most of the time during this project following the setup.

Once you open `index.tsx` you should follow these steps to get your base Application window created:

1. Import the full react library at the top of your file, along with a single import from `react-dom`, and the createRoot method:
    ```tsx
    import * as React from "react";
    import { createRoot } from "react-dom/client";
    import { render } from 'react-dom';
    ```

2. Follow that with the full App() function and main run of the application:
    ```tsx
    function App(): React.JSX.Element {  
        return (  
            <div>  
                <h1>Hello Pieces Dev Community :)</h1>  
            </div>
        )}
    ```

3. And then add these last two lines to target the `root` element by using the ID that is on it:
    ```tsx
    const rootElement = document.getElementById("root") as Element;  
    const root = createRoot(rootElement);
    ```

> **Helpful tip**
> When working in this environment I noticed some @babel errors during the build process (or running `npm run start`) and found this workaround that you can install via npm as well [here](https://www.npmjs.com/package/@babel/plugin-transform-private-property-in-object).


## Running your Project for the First Time
Everything has been added. We are nearly there and will need to perform a final few checks before starting our dev project.

1. Be sure that Pieces OS is running
2. (optional) Run another npm install (because it never hurts)

Now that everything is ready to go, lets run this command here:

```bash
# remember that we added this to the scripts as: "start": "react-scripts start"
npm run start
```

And after a few seconds you should be able to see in your Chrome browser (or your primary browser) a blank window that looks like this:

##### **You have now successfully set up your dev environment, and will be ready to test different endpoints inside of Pieces OS.**

## Creating a Copilot
The following examples show how to use the Pieces Copilot and some of the endpoints available. Read more about the copilot on this article: [Creating your own Open Source Copilot](https://code.pieces.app/blog/build-your-own-open-source-copilot-with-pieces).

### Use Pieces.QGPTStreamInput
You can query the Pieces Copilot out of the box (after installation) with no application context set. The stream input is structured as a question object, containing a query and a parameter for relevance called `relevant`:

```typescript 
const input: Pieces.QGPTStreamInput = {
	question: {
		query,
		relevant: {iterable: []}
	},
}
````

Then you can use a number of stream listeners to inside of [something like a websocket like seen here](https://jwaf.pieces.cloud/?p=c79e46aa7a) to deal with any JSON configuration.

### Receiving Answers with Pieces.QGPTQuestionAnswer
When you get a response back from the copilot after asking a question, you may need to type it accordingly to access the appropriate properties. Here would be an example if getting back the first answer message following a question that was sent over:

```typescript
const answer: Pieces.QGPTQuestionAnswer | undefined = result.question?.answers.iterable[0];
```

Read more on the specifics of the Pieces Copilot logic and [endpoints on this copilot specific repo](https://github.com/pieces-app/pieces-copilot-vanilla-typescript-example).

## Connecting your Application
When Pieces OS is running in the background of your machine, it is communicating with other local applications that use Pieces software, and up until recently only supporting internally built tools.

As each plugin, extension, or application initializes they 'reach out' to Pieces OS and authenticate with the application themselves. There are a number of application formats that we support and provide for each of our applications. ==When developing on Pieces OS, you can use **"LOCAL_DEV"**
to avoid any issues with other applications.==

### Creating `Application`
The `application` model describes what application a format or analytics event originated from. This is passed along when initializing your dev environment and creates a connection to Pieces OS.

To create the `Application` object for your project, you will need to make sure that you have the following two things:

1. Create a `tracked_application` json object to hold your formatted data
2. Output using `console.log()` following your `connect()` method is complete

***We will go over the different usages in each of these steps one at a time to bring up any specificities that may need a deeper explanation.***

#### Using `tracked_application`
Connecting your application here is as easy as a single **POST** request and can be done via the Response interface of the **Fetch Api**. Remember that you can name this whatever you would like to, just be sure to include the updated variable name in the `options` down below.

> When creating the `tracked_application` item, you will need to use a type that is not available inside the current `npm_deployment`.
>
> This structure is the same as the tracked_application full example you see here below, and the only difference from the unavailable type `SeededTrackedApplication` and the available type `TrackedApplication` is `id: number`.

First lets take a look at the `tracked_application` object:

```tsx
const tracked_application = {  
    name: Pieces.ApplicationNameEnum.OpenSource,  
    version: '0.0.1',  
    platform: Pieces.PlatformEnum.Macos,  
}
```

- **name**: OpenSource
- **platform**: Depending on your current environment, you need to set the platform parameter to match your current operating system. Select between `.Macos`, `.Windows`, `.Linux`
- **version**: A string value that can be any string value and can be used to track the application you are building

> **Imports**
> Be sure to double-check that you have the following import added to the first few lines of your `index.tsx` file if you have not already: `import * as Pieces from "@pieces.app/pieces-os-client";`

### Connect using `Pieces.ConnectorApi()` and `tracked_application`
When your program starts, it needs to connect to Pieces OS to gain access to any functional data and to exchange information on the `localhost:1000` route. Now that you have your `tracked_application` - lets get into the details.

Start by defining you connect function and prepare the `connectorApi` on `Pieces.ConnectorApi().connect()` passing in the `tracked_applicaition` we created above:

```tsx
export async function connect(): Promise<JSON> {
  const connectorApi = new Pieces.ConnectorApi();
  const response = await connectorApi.connect({
    seededConnectorConnection: { application: tracked_application },
  });
  
  return JSON.parse(JSON.stringify(response));
}
```

Here is the entire connect function for you to double-check your work:

```tsx
const tracked_application = {
  name: Pieces.ApplicationNameEnum.OpenSource,
  version: '0.0.1',
  platform: Pieces.PlatformEnum.Macos,
}


export async function connect(): Promise<JSON> {
  const connectorApi = new Pieces.ConnectorApi();

  const response = await connectorApi.connect({
    seededConnectorConnection: { application: tracked_application },
  });

  return JSON.parse(JSON.stringify(response));
}
```


## View Console Output in your Browser
Now that everything has been correctly configured (fingers crossed) you can run your sample application and connect to Pieces OS for the first time.

Inside your terminal at the root directory of your project, use NPM to run one of the scripts that we added to the package.json file called "start":

```bash 
npm run start
```

And you should have the same content in the main browser window as before once this completes. But if you open up your inspector using `cmd + option + i` or `ctrl + shift + c` you will see this inside of your console:

![Console Output](assets/image.png)

This includes both the full OS response object with all the data that you will need to get going with other endpoints, and your application is now connected and ready to go for the rest of your exploration and discovery!

Follow along with these next steps to learn about **assets and formats,** two things that are very important for managing any form of data with Pieces OS.

## Getting Started with `Pieces.AssetApi` + `Pieces.AssetsApi`

First lets define what these two things are:

* **Asset**: a very important models who's primary purpose is to manage the seeded data that comes in to the application, and is stored inside of Pieces OS. Each asset is a identifiable piece of saved data, or pre-seeded data.

* **Assets**: equally important, but instead of containing a single asset with parameters storing data on it, Assets serves as the list of `type: Asset` objects that are stored there. Also you will find the operations for adding, deleting, searching, and other functions that are related to referencing a number of different snippets to make a comparison. For instance:

If I want to create a snippet (lets call it `var`), I need to send this to the master `Assets` list, you would first create `var` itself with the proper formats and data added to the `var` object, then send the newly created SeededAsset over to the Assets list (assets/create). Then you will receive the asset back as the response from the server. Cool, right?

> Traditionally, `Assets` is a linear list of flat `Asset` objects stored in an array or list.
>
> **You can use identifiers to get a specific asset from the asset list called a UUID.** But you'll learn more about that later on.

### `Asset`
Initially when creating your application, you will have no snippets saved to your project, will not be signed in, and you will have not completed onboarding. These are properties that you may see during this creation.

> Check out `localhost:1000/assets` while Pieces OS is running to see the empty object that is there.

#### **Creating your First Asset**
While creating an asset, there are some required parameters that you will need to be sure to include the proper **format** data. For each `Asset` object, each required parameter must be included, and the Asset must be seeded before it is sent to be created.

#### SeededAsset
This seed data will become the asset. You can use this structure to provide data to Pieces OS, and will include fewer parameters than what you will get back in your response. Lets get started with the seeded asset formatting before we pass this over to `/Assets`.

At the top level of this object you will see:

- `schema`
- `metadata`
- **`application`** (required)
- **`format`** (required)
- `discovered`
- `available`


`Schema`, `metadata`, `discovered` and `available` are all parameters that have extensive use cases, but for now we are going to focus on `application` & `format` - the two required formats for this object.

With each call you need to include your application object that you created earlier - and we can do this inside of the .then() following the return from `connect()` which is defined here:

```tsx
connect().then(__ => {
    // parsing this value and restringifying it properly gives it its type.
    full_context = __;
    let _t = JSON.parse(JSON.stringify(full_context));
    applicationData = _t.application;
    console.log('Application Data: ', applicationData);

})
```


### `Pieces.AssetsApi().assetsCreateNewAsset()`
Now before continuing forward, we will need to prepare the `create()` function to connect to the proper `Assets/create` endpoint. Create slightly differs from connect, since previously our json object did not require any new data that was returned back from the server. In this case **we will need to include the application data that was returned back from our initial call to `/connect`.**

The `create()` function needs to accomplish a few things:

1. Create a new asset using our simple `SeededAsset` configuration that we just created as the `seed` object
2. Send request via `Pieces.AssetsApi().assetsCreateNewAsset()`
3. Return the response back after this is completed

Here is what the `createAsset()` function looks like in its entirety:

```tsx
function createAsset() {
    let _seededAsset: SeededAsset = {
        application: applicationData,
        format: {
            fragment: {
                string: { raw: data },
            },
        },
        metadata: {
            name: name
        }
    }

    // create your seed
    let _seed: Pieces.Seed = {
        asset: _seededAsset,
        type: SeedTypeEnum.Asset
    }
}
```

Now that we have the create function created, all that is left is to call `create()` and log our new asset to the console!

You can add this final call to the end of the `connect.then()`:

```tsx
// make your api call.
new Pieces.AssetsApi().assetsCreateNewAsset({seed: _seed}).then(_a => {
    console.log("well howdy", _a);
})
```

#### Response
Once you receive your response back from Pieces OS, you will notice the drastic difference in the response back here. There is quite a long list of parameters that you can store alongside your assets to make them more powerful.

The response back will look similar to the following: [https://jwaf.pieces.cloud/?p=24e242a85e](https://jwaf.pieces.cloud/?p=24e242a85e)


## Get Assets Snapshot `Pieces.AssetsApi().assetsSnapshot()`
Now when you follow this guide, you will be receiving this data back from inside your console in the browser. But if you would like to view your data incrementally through the full browser window, you can navigate to `http://localhost:1000/assets` to view a full list of snippets that have been saved in your browser, or you could log to the console using `Pieces.AssetsApi().assetsSnapshot()`.



To get your assets snapshot, you can use this to list each asset:

```tsx
new Pieces.AssetsApi().assetsSnapshot({}).then(_assetList => {
    for (let i = 0; i < _assetList.iterable.length; i++) {
        // this will log the asset to the console.
       console.log(_assetsList[i]);
    }
})
```

Each asset will have and ID on it that can be used to match a singular asset here. Very useful when trying to get a specific asset from your full assetsSnapshot.

## Using `Pieces.AssetApi().assetUpdate()` to Rename Snippet
Individual assets can be manipulated with a number of different properties and metadata. You can add **titles**, **annotations**, **tags**, **links**, **anchors**, and much more all through this single endpoint. To use it properly first use the assetSnapshot to get your asset using its ID property, and store your asset in a variable in your `.then()`. You can then adjust any of the properties on this asset you have stored on `_asset`, then pass into `requestParameters` on the `assetUpdate` endpoint.

Check out this code block with an example of how to rename an asset:

```tsx
function renameAsset(_name: string, _id: String){
    new Pieces.AssetsApi().assetsSnapshot({}).then(_assetList => {
        for (let i = 0; i < _assetList.iterable.length; i++) {
            if (_assetList.iterable[i].id == _id) {

                let _asset = _assetList.iterable[i];

                _asset.name = _name;

                new Pieces.AssetApi().assetUpdate({asset: _asset}).then(_updated => {
                    console.log("updated:", _updated);
                })
            }
        }
    })
}
```

Then inside your UI you can connect the renameAsset() function to your button and text inputs. Note that in order to perform this operation you need both the id of the asset, and also the new name that you would like to update you asset to.

The code block below includes the state management for the text input, along with the button that initiates the asset update as well.

This is what that looks like:

```tsx
function RenameAssetInput() {
    const [name, setNameValue] = useState('');
    const [id, setIdValue] = useState('');

    const handleNameChange = (event) => {
        setNameValue(event.target.value);
    };

    const handleIdChange = (event) => {
        setIdValue(event.target.value);
    };

    return (
        <>
            <p>Name:</p>
            <input value={name} style={{ width: '450px', verticalAlign: 'top' }} onChange={handleNameChange} />
            <p>ID:</p>
            <input value={id} style={{ width: '450px', verticalAlign: 'top' }} onChange={handleIdChange} />
            <button style={{ marginTop: '10px', maxWidth: '200px' }} onClick={() => renameAsset(name, id)}>Rename Snippet</button>
        </>

    );
}
```

## Refresh Your Snapshot
In order to get updates to your assetSnapshot as a whole, you may need to update you local list in order to reflect changes that come from Pieces OS and give information on the assets stored there. In order to perform a refresh you can use this code block here:

```tsx
const [array, setArray] = useState([]);

const refresh = (_newAsset: LocalAsset) => {
    setArray(prevArray => [...prevArray, _newAsset])
}

function refreshSnippetList() {
    new Pieces.AssetsApi().assetsSnapshot({}).then((assets) => {
        
        // loop through your assets.
        for (let i = 0; i < assets.iterable.length; i++) {
            let _local: LocalAsset = {
                id: assets.iterable[i].id,
                name: assets.iterable[i].name,
                classification: assets.iterable[i].original.reference.classification.specific
            }

            refresh(_local);

        }
    })
}
```

I added this to the top level for reactivity inside the main `App()` call. You can choose to place this in a different location if you are not in need of any reactive data.

## Delete Using `Pieces.AssetsApi().assetsDeleteAsset()`

Assets can be deleted from your Assets list entirely by passing them into the `assetsDeleteAsset` endpoint. Just like the above example to rename a specific asset, you will need the ID of the asset that you are trying to remove. In order to get that you will need to use assetSnapshot in tandem with your delete endpoint:

```tsx
 new Pieces.AssetsApi().assetsSnapshot({}).then(_assetList => {
    for (let i = 0; i < _assetList.iterable.length; i++) {
        if (_assetList.iterable[i].id == _id) {
            new Pieces.AssetsApi().assetsDeleteAsset({asset: _assetList.iterable[i].id }).then(_ => console.log("delete confirmed!"))
        }
    }
})
```

After a successful delete, you may have to reload your browser window in order to see the updated snippet list.

> **Recommendation**  
> We use [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) internally when developing and **recommend** using some form of web based extension that assists with reading JSON DATA

## Use `Pieces.SearchApi()`
The search API can be used to filter or search through snippets that have been saved, then perform specific actions on them based on a set of rules. Here is a brief example of searching where `query: "page"` is your search term:

```typescript
new Pieces.SearchApi().fullTextSearch({ query: "page" }).then( searchedAssets => {

    // get the "ID" or identifier of the first match on the string you passed in as the query:
    let firstSearchMatchAssetIdentifier = searchedAssets.iterable[0].identifier;

    let matchName: String;

    // take that identifier to get your assets name using the Pieces.AssetApi()
    new Pieces.AssetApi().assetSnapshot({asset: firstSearchMatchAssetIdentifier}).then((asset) => {
      // assign that name to the matchName variable:
      matchName = asset.name;
      console.log(matchName);
    })
    // then you can do whatever you would like with that match:   
  return matchName;
})
```

## Conclusion
This is a very simple guide on how to get up and running using the @pieces.app/pieces-os-client npm package and create a web environment that you can build on top of along with examples on how to use some of the specific endpoints as well. **Fork this repo** to get started and learn about the depth of possibilities you have with Pieces OS.

To continue learning about the endpoints, other supported languages, and more documentation, check out the [OpenSource repo](https://github.com/pieces-app/opensource).

