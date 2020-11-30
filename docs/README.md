# project presentation

Autor: Miguel Avendaño W. (MAW)
email: mawcontacto@gmail.com
Date: Nov 2020

The entire project was build using HTML, CSS(scss), and vanillaJs alone.

# stages of development

To develop the project, I took the next steps:

1. design material revision and Readme file check
2. pen and paper sketches for the mobile version. The main goal was to provide as much information as possible for the mobile user keeping a clear difference between big and small cards
3. identification of common UI´s elements: texts, buttons, cards, flags, icons
4. custom grid definitions
5. build of common elements 
6. build up of pc version of UI (according to provided designs)
7. definition of breakpoints according to information reading needs (clarity and usefulness as main goals) (SEE NOTE A)
8. graphic showcase definitions
9. chart js integration, script customization, and custom functions (SEE NOTE B)
10. addition of modal presentation feature (SEE NOTE C)
11. data file definitions for simulations of data request 
12. data reading and UI generation trough JS
13. fine tunning of UI for real data presentation
14. cleaning-up files
15. documentation
16. happy end :)

# notes

A. About mobile version and responsive design

As the main goal is the presentation of data in a clear and useful way, I started with the pc version of the Dashboard. Once I had a clear understanding of the layout for the pc version, I build up a simple yet flexible and responsive grid system and, after that, I build up the card component with the ability to fit smoothly in any given layout.

When the pc version was finished, I started to go down in resolution to find out the best breakpoint according to data presentation. In each defined breakpoint, I made adjustments to margins, paddings, font sizes, and, in some cases, on stacking of elements to present them most clearly and attractively.

Finally, when I charged up the "real data" into the components, I made fine adjustments in margins and stacking of elements.

B. about chart js

Although I read as much as I can about the functioning of chart js, I couldn´t get the chart exactly as it is presented in the designs. 

There at least two noticeable differences between the design and the delivered solution:

1. The outer lines of the chart are not of the same color in both versions.
2. In the received designs, the starting point of the line is outside the chart. It starts inside on the developed solution.

C. About modal feature

To give a more polished experience of use to the most experimented users, I added the ability to explore the modal charts by using the keyboard alone. Normal click interactions are also available.

To move between cards, users can use tab or tab+shift
To open up modal charts, while focussing a big card, users can use "enter " or "space "
To close up modal charts, while it is opened, users can: 1. navigate to the "x" button using the keyboard and pressing "enter" or "space"; 2. press the "ESC" key

# final thoughts

It was a really challenging mini-project and, I will be happy to have the opportunity to discuss it with you.