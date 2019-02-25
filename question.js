/**
 * Created by JACKIERIEL on 24-Oct-18.
 */

var questions = [
    {
// question 1
        question:"UNIVAC is",
        option1:"Universal Automatic Computer",
        option2:"Universal Array Computer",
        option3:"Unique Automatic Computer",
        option4:"Unvalued Automatic Computer",
        answer:"A"
    },
    {
// question 2
        question:"The basic operations performed by a computer are",
        option1:"Arithmetic operation",
        option2:"Logical operation",
        option3:"Storage and relative",
        option4:"All the above",
        answer:"D"
    },
    {
// question 3
        question:"The two major types of computer chips are",
        option1:"External memory chip",
        option2:"Primary memory chip",
        option3:"Microprocessor chip",
        option4:"Both b and c", 
        answer:"D"
    },
    {
// question 4
        question:"Microprocessors as switching devices are for which generation computers",
        option1:"First Generation",
        option2:"Second Generation",
        option3:"Third Generation",
        option4:"Fourth Generation",
        answer:"D"
    },
    {
// question 5
        question:"What is the main difference between a mainframe and a super computer?",
        option1:"Super computer is much larger than mainframe computers",
        option2:"Super computers are much smaller than mainframe computers",
        option3:"Supercomputers are focused to execute few programs as fast as possible while mainframe uses its power to execute as many programs concurrently",
        option4:"Supercomputers are focused to execute as many programs as possible while mainframe uses its power to execute few programs as fast as possible.",
        answer:"C"
    },
    {
// question 6
        question:"ASCII and EBCDIC are the popular character coding systems. What does EBCDIC stand for?",
        option1:"Extended Binary Coded Decimal Interchange Code",
        option2:"Extended Bit Code Decimal Interchange Code",
        option3:"Extended Bit Case Decimal Interchange Code",
        option4:"Extended Binary Case Decimal Interchange Code",
        answer:"A"
    },
    {
// question 7
        question:"The brain of any computer system is",
        option1:"ALU",
        option2:"Memory",
        option3:"CPU",
        option4:"Control unit", 
        answer:"C"
    },
    {
// question 8
        question:"Storage capacity of magnetic disk depends on",
        option1:"tracks per inch of surface",
        option2:"bits per inch of tracks",
        option3:"disk pack in disk surface",
        option4:"All of above",
        answer:"D"
    },
    {
// question 9
        question:"The two kinds of main memory are:",
        option1:"Primary and secondary",
        option2:"Random and sequential",
        option3:"ROM and RAM",
        option4:"All of above",
        answer:"C"
    },
    {
// question 10
        question:"A storage area used to store data to a compensate for the difference in speed at which the different units can handle data is",
        option1:"Memory",
        option2:"Buffer",
        option3:"Accumulator",
        option4:"Address",
        answer:"B"
    },
    {
        question: "Computer is free from tiresome and boardroom. We call it",
        option1: "Accuracy",
        option2: "Reliability",
        option3: "Diligence",
        option4: "Versatility",
        answer: "C"
    },
    {
        question: "Integrated Circuits (ICs) are related to which generation of computers?",
        option1: "First generation",
        option2: "Second generation",
        option3: "Third generation",
        option4: "Fourth generation",
        answer: "C"
    },
    {
        question: "CD-ROM is a",
        option1: "Semiconductor memory",
        option2: "Memory register",
        option3: "Magnetic memory",
        option4: "None of above",
        answer: "D"
    },
    {
        question: "A hybrid computer",
        option1: "Resembles digital computer",
        option2: "Resembles analogue computer",
        option3: "Resembles both a digital and analogue computer",
        option4: " None of the above",
        answer: "C"
    },
    {
        question: "Which type of computers uses the 8-bit code called EBCDIC?",
        option1: "Minicomputers",
        option2: "Microcomputers",
        option3: "Mainframe computers",
        option4: "Super computer",
        answer: "C"
    },
    {
        question: "The ALU of a computer responds to the commands coming from",
        option1: "Primary memory",
        option2: "Control section",
        option3: "External memory",
        option4: "Cache memory",
        answer: "B"
    },
    {
        question: "Chief component of first generation computer was",
        option1: "Transistors",
        option2: "Vacuum Tubes and Valves",
        option3: "Integrated Circuits",
        option4: "None of above",
        answer: "B"
    },
    {
        question: "To produce high quality graphics (hardcopy) in color, you would want to use a/n",
        option1: "RGB monitor",
        option2: "Plotter",
        option3: "Ink-jet printer",
        option4: "Laser printer",
        answer: "B"
    },
    {
        question: "What are the stages in the compilation process?",
        option1: "Feasibility study, system design and testing",
        option2: "Implementation and documentation",
        option3: "Lexical Analysis, syntax analysis, and code generation",
        option4: "None of the above",
        answer: "C"
    },
    {
        question: "Which of the following IC was used in third generation of computers?",
        option1: "SSI",
        option2: "MSI",
        option3: "LSI",
        option4: "Both a and b",
        answer: "D"
    },
    {
        question: "The main electronic component used in first generation computers was",
        option1: "Transistors",
        option2: "Vacuum Tubes and Valves",
        option3: "Integrated Circuits",
        option4: "None of above",
        answer: "B"
    },
    {
        question: "A dumb terminal has",
        option1: "an embedded microprocessor",
        option2: "extensive memory",
        option3: "independent processing capability",
        option4: "a keyboard and screen",
        answer: "D"
    },
    {
        question: "One millisecond is",
        option1: "1 second",
        option2: "10th of a seconds",
        option3: "1000th of a seconds",
        option4: "10000th of a seconds",
        answer: "C"
    },
    {
        question: "The output quality of a printer is measured by",
        option1: "Dot per sq. inch",
        option2: "Dot per inch",
        option3: "Dots printed per unit time",
        option4: "All of the above",
        answer: "B"
    },
    {
        question: "Which of the following was a special purpose computer?",
        option1: "ABC",
        option2: "ENIAC",
        option3: "EDVAC",
        option4: "All of the above",
        answer: "A"
    },
    {
        question: "What was the computer invented by Attanasoff and Clifford?",
        option1: "Mark I",
        option2: "ABC",
        option3: "Z3",
        option4: "None of above",
        answer: "B"
    },
    {
        question: "Which of the following storage devices can store maximum amount of data?",
        option1: "Floppy Disk",
        option2: "Hard Disk",
        option3: "Compact Disk",
        option4: "Magneto Optic Disk",
        answer: "B"
    },
    {
        question: "Which computer was considered the first electronic computer until 1973 when court invalidated the patent?",
        option1: "ENIAC",
        option2: "MARK I",
        option3: "Z3",
        option4: "ABC",
        answer: "A"
    },
    {
        question: "A physical connection between the microprocessor memory and other parts of the microcomputer is known as",
        option1: "Path",
        option2: "Address bus",
        option3: "Route",
        option4: "All of the above",
        answer: "B"
    },
    {
        question: "High density double sided floppy disks could store ___ of data",
        option1: "1.40 MB",
        option2: "1.44 GB",
        option3: "1.40 GB",
        option4: "1.44 MB",
        answer: "D"
    },
    {
        question: "A high quality CAD system uses the following for printing drawing and graphs",
        option1: "Dot matrix printer",
        option2: "Digital plotter",
        option3: "Line printer",
        option4: "All of the above",
        answer: "B"
    },
    {
        question: "Which of the following is not an input device?",
        option1: "OCR",
        option2: "Optical scanners",
        option3: "Voice recognition device",
        option4: "COM (Computer Output to Microfilm)",
        answer: "D"
    },
    {
        question: "The accuracy of the floating-point numbers representable in two 16-bit words of a computer is approximately",
        option1: "16 digits",
        option2: "6 digits",
        option3: "9 digits",
        option4: "All of above",
        answer: "A"
    },
    {
        question: "In most of the IBM PCs, the CPU, the device drivers, memory, expansion slots and active components are mounted on a single board. What is the name of the board?",
        option1: "Motherboard",
        option2: "Daughterboard",
        option3: "Bredboard",
        option4: "Fatherboard",
        answer: "A"
    },
    {
        question: "In most IBM PCs, the CPU, the device drives, memory expansion slots and active components are mounted on a single board. What is the name of this board?",
        option1: "Motherboard",
        option2: "Breadboard",
        option3: "Daughter board",
        option4: "Grandmother board",
        answer: "A"
    },
    {
        question: "Magnetic disks are the most popular medium for",
        option1: "Direct access",
        option2: "Sequential access",
        option3: "Both of above",
        option4: "None of above",
        answer: "D"
    },
    {
        question: "A technique used by codes to convert an analog signal into a digital bit stream is known as",
        option1: "Pulse code modulation",
        option2: "Pulse stretcher",
        option3: "Query processing",
        option4: "Queue management",
        answer: "A"
    },
    {
        question: "Regarding a VDU, Which statement is more correct?",
        option1: "It is an output device",
        option2: "It is an input device",
        option3: "It is a peripheral device",
        option4: "It is hardware item",
        answer: "C"
    },
    {
        question: "A modern electronic computer is a machine that is meant for",
        option1: "Doing quick mathematical calculations",
        option2: "Input, storage, manipulation and outputting of data",
        option3: "Electronic data processing",
        option4: "Performing repetitive tasks accurately",
        answer: "B"
    },
    {
        question: "When was vacuum tube invented?",
        option1: "1900",
        option2: "1906",
        option3: "1910",
        option4: "1880",
        answer: "B"
    },
    {
        question: "Which of the following produces the best quality graphics reproduction?",
        option1: "Laser printer",
        option2: "Ink jet printer",
        option3: "Plotter",
        option4: "Dot matrix printer",
        answer: "C"
    },
    {
        question: "Computers with 80286 microprocessor is",
        option1: "XT computer",
        option2: "AT computers",
        option3: "PS/2 computer",
        option4: "None of above",
        answer: "B"
    },
    {
        question: "An application suitable for sequential processing is",
        option1: "Processing of grades",
        option2: "Payroll processing",
        option3: "Both a and b",
        option4: "All of above",
        answer: "C"
    },
    {
        question: "Which of the following is not processing?",
        option1: "arranging",
        option2: "manipulating",
        option3: "calculating",
        option4: "gathering",
        answer: "D"
    },
    {
        question: "The digital computer was developed primarily in",
        option1: "USSR",
        option2: "Japan",
        option3: "USA",
        option4: "UK",
        answer: "C"
    },
    {
        question: "Software in computer",
        option1: "Enhances the capabilities of the hardware machine",
        option2: "Increase the speed of central processing unit",
        option3: "Both of above",
        option4: "None of above",
        answer: "A"
    },
    {
        question: "Todayâ€™s computer giant IBM was earlier known by different name which was changes in 1924. What was that name?",
        option1: "Tabulator Machine Co.",
        option2: "Computing Tabulating Recording Co.",
        option3: "The Tabulator Ltd.",
        option4: "International Computer Ltd.",
        answer: "B"
    },
    {
        question: "Before a disk drive can access any sector record, a computer program has to provide the recordâ€™s disk address. What information does this address specify?",
        option1: "Track number",
        option2: "Sector number",
        option3: "Surface number",
        option4: "All of above",
        answer: "D"
    },
    {
        question: "The arranging of data in a logical sequence is called",
        option1: "Sorting",
        option2: "Classifying",
        option3: "Reproducing",
        option4: "Summarizing",
        answer: "A"
    },
    {
        question: "What is the responsibility of the logical unit in the CPU of a computer?",
        option1: "To produce result",
        option2: "To compare numbers",
        option3: "To control flow of information",
        option4: "To do mathâ€™s works",
        answer: "B"
    }
];
