# JD-gaming

[DEMO LINK](https://andreas-just.github.io/test_JD-gaming/)

## How  to run it

 1. Clone the repository `git clone https://github.com/**/test_JD-gaming.git`
 2. Go into project folder `cd test_JD-gaming`
 3. Run `npm install`
 4. Run `npm run dev` 
 5. Open in your Browser `http://localhost:3000`

## Technologies used in the work

- React
- MobX
- TypeScript
- SCSS

## The Task Description

It is necessary to implement a pagination by category, each element of which is a string of arbitrary length.

### **Functional Requirements**

- On Desktop / Tablet, the paginator should be centered on the page, occupy 50% of the width and have a fixed height.

- On mobile, 100% width minus 8px padding on the sides.

- The values ​​of the paginator elements can be set by a constant in the code, listed with commas in the textarea on the page, or generated randomly - at your choice.

- By clicking on the paginator element - select it, deselect the previous one. The first item is selected by default.

- When you click on the arrows, select the previous / next and so on in a circle.

- The paginator must respond to the page resize so that the number of displayed paginator elements is maximized. However, you cannot display “half of the category”.

- The selected item must always be visible.

- It is not necessary to observe the stylization as in the picture, you can do it “to your taste”.

    [An example of implementation.](https://www.dropbox.com/s/j59prvcaf7ldv2a/пример.mov?dl=0)

### **Technical Requirements**

- React + MobX + Typescript stack

- Creating a project via create-react-app-typescript

- It is forbidden to use ready-made libraries for pagination
