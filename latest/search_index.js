var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#NLOptControl.jl-Documentation-1",
    "page": "Home",
    "title": "NLOptControl.jl Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Introduction-1",
    "page": "Home",
    "title": "Introduction",
    "category": "section",
    "text": "This software solves nonlinear control problems at a high-level very quickly.It added to juliaOpt community by:Providing an implementation of of the hp-pseudospectral method written in julia\nIncorporating model predictive control functionality\nAutomatically visualizing the solution"
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "There are several packages that need to be installed, to do this run:Pkg.add(\"PrettyPlots\")\nPkg.add(\"VehicleModels\")\nPkg.add(\"NLOptControl\")Either Ipopt.jl or KNITRO.jl can be used for the nonlinear solver. Since Ipopt is free, all of the examples will use it and it can be added with:Pkg.add(\"Ipopt\");Pkg.build(\"Ipopt\");If you are using Linux make sure that you have gfortran to run Ipopt:sudo apt-get install gfortranAlso, a plotting backend will be required and there are several options:Pkg.add(\"PGFPlots\");Pkg.build(\"PGFPlots\")   # best looking\nPkg.add(\"GR\");Pkg.build(\"GR\");              # most reliable\nPkg.add(\"PyPlot\");Pkg.build(\"PyPlot\")       # also a good option  "
},

{
    "location": "index.html#juliaCon-Workshop-Notebook-(OUT-OF-DATE!)-1",
    "page": "Home",
    "title": "2017 juliaCon Workshop Notebook (OUT OF DATE!)",
    "category": "section",
    "text": "After installation, the notebook can be viewed:using IJulia\nnotebook(dir=Pkg.dir(\"NLOptControl/examples\"))Also, on the left side of this site, there are many tutorials that provide complete examples for using this software. Please look at these for information on how to use this tool."
},

{
    "location": "index.html#Citation-1",
    "page": "Home",
    "title": "Citation",
    "category": "section",
    "text": "If you find NLOptControl.jl useful, please cite it:@software{nlopt,\n  author = {{Huckleberry Febbo}},\n  title = {NLOptControl.jl},\n  url = {https://github.com/JuliaMPC/NLOptControl.jl},\n  version = {0.0.1},\n  date = {2017-06-17},\n}If you find VehicleModels.jl useful, please cite this paper:@Conference{Febbo2017,\n  author    = {Huckleberry Febbo, Jiechao Liu, Paramsothy Jayakumar, Jeffrey L. Stein, Tulga Ersal},\n  title     = {Moving Obstacle Avoidance for Large, High-Speed Autonomous Ground Vehicles},\n  year      = {2017},\n  publisher = {IEEE}\n}"
},

{
    "location": "index.html#Acknowledgements-1",
    "page": "Home",
    "title": "Acknowledgements",
    "category": "section",
    "text": "JuMP.jl is an important part of this NLOptControl.jl and discussions with Miles Lubin where helpful\nChris Rackauckas is a very helpful member of the julia community and has provided me support and advice multiple times his software DifferentialEquations.jl is also part of NLOptControl.jl"
},

{
    "location": "index.html#Exported-Functions-1",
    "page": "Home",
    "title": "Exported Functions",
    "category": "section",
    "text": "The following link provides documentation all of the exported functions for NLOptControl.jl, VehicleModels.jl, and PrettyPlots.jl.Pages=[\n    \"functions/NLOptControl.md\",\n    \"functions/PrettyPlots.md\"\n    ]\nDepth=1"
},

{
    "location": "tutorials/Brachistochrone/main.html#",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Quick Ex#1: Brachistochrone",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/Brachistochrone/main.html#Quick-Ex#1:-Brachistochrone-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Quick Ex#1: Brachistochrone",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/Brachistochrone/main.html#Solved-by:-John-and-Bernoulli,-Newton-and-L'Hospital-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Solved by: John and Bernoulli, Newton and L'Hospital",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/Brachistochrone/main.html#Given:-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Given:",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/Brachistochrone/main.html#A-particle-sliding-without-friction-along-an-unknown-track-in-a-gravitational-field-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "A particle sliding without friction along an unknown track in a gravitational field",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/Brachistochrone/main.html#Dynamic-Constraints-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Dynamic Constraints",
    "category": "section",
    "text": "dotx_1(t)=x_3(t)sin(u_1(t))dotx_2(t)=-x_3(t)cos(u_1(t))dotx_3(t)=gcos(u_1(t))"
},

{
    "location": "tutorials/Brachistochrone/main.html#Boundary-Conditions-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Boundary Conditions",
    "category": "section",
    "text": "x_1(0)=0 qquad x_1(t_f)=2x_2(0)=0qquad x_2(t_f)=-2x_3(0)=0qquad x_3(t_f)=free"
},

{
    "location": "tutorials/Brachistochrone/main.html#Find:-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Find:",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/Brachistochrone/main.html#The-track-that-minimizes-time-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "The track that minimizes time",
    "category": "section",
    "text": "J=t_f"
},

{
    "location": "tutorials/Brachistochrone/main.html#Solution:-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Solution:",
    "category": "section",
    "text": "This problem can be found here."
},

{
    "location": "tutorials/Brachistochrone/main.html#Packages-that-will-be-used-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Packages that will be used",
    "category": "section",
    "text": "using NLOptControl\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main.html#Define-the-Problem-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Define the Problem",
    "category": "section",
    "text": "Next let's write down the boundary conditions into an array:X0=[0.0,0.0,0.0]\nXF=[2.,-2.,NaN]\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main.html#Notice:-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Notice:",
    "category": "section",
    "text": "The numbers that where put into the expression are Float64; For now this is required!\nThe NaN is put into the boundary constraint for the third state; If any of the state bounds are free then pass a NaNNow that we have the basic problem written down, we can call the define() function as:n=define(numStates=3,numControls=1,X0=X0,XF=XF);\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main.html#Basics-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Basics",
    "category": "section",
    "text": "Variable Description\nn object that holds the entire optimal control problem\nde array of differential equation expressions\nnumStates the number of states\nnumControls the number of controls\nX0 intial state constraint\nXF final state constraintAlso, not in this problem, butVariable Description\nXL lower state bound\nXU upper state bound\nCL lower state bound\nCU upper control boundThe above bounds can be set in the same fashion as the initial and final state constraints. i.e. in an Array."
},

{
    "location": "tutorials/Brachistochrone/main.html#State-and-Control-Names-(optional)-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "State and Control Names (optional)",
    "category": "section",
    "text": "states!(n,[:x,:y,:v],descriptions=[\"x(t)\",\"y(t)\",\"v(t)\"]);\ncontrols!(n,[:u],descriptions=[\"u(t)\"]);\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main.html#Differential-Equations-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Differential Equations",
    "category": "section",
    "text": "Now we need to write all of the given information out. Let's start with the differential equation, that is written as an array of expressions:dx=[:(v[j]*sin(u[j])),:(-v[j]*cos(u[j])),:(9.81*cos(u[j]))]\ndynamics!(n,dx)\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main.html#Configure-the-Problem-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Configure the Problem",
    "category": "section",
    "text": "Now that the basic optimal control problem has been defined, the next step is to configure!() with additional options.configure!(n;(:Nck=>[100]),(:finalTimeDV=>true));\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main.html#Settings:-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Settings:",
    "category": "section",
    "text": "Key Description\n:Nck array of that holds the number of points within each interval\n:finalTimeDV bool to indicate if time is a design variable"
},

{
    "location": "tutorials/Brachistochrone/main.html#Notice:-2",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Notice:",
    "category": "section",
    "text": "Final time is a design variable; we are trying to minimize it\nWe defined this as a single interval problem with 100 points"
},

{
    "location": "tutorials/Brachistochrone/main.html#Objective-Function-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Objective Function",
    "category": "section",
    "text": "Finally, the objective function needs to be defined. For this, we use the JuMP macro NLOptControl() directly as:@NLobjective(n.mdl,Min,n.tf);\nnothing # hidewith,Variable Description\nn.mdl object that holds them JuMP model\nMin for a minimization problem\nn.tf a reference to the final time"
},

{
    "location": "tutorials/Brachistochrone/main.html#Optimize-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Optimize",
    "category": "section",
    "text": "Now that the entire optimal control problem has been defined we can optimize!() it as:optimize!(n);\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main.html#Post-Process-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Post Process",
    "category": "section",
    "text": "Make sure that you are not running the code in a folder where you have an important folder named results, because it will be deleted! Now that the problem has been optimized, we can quickly visualize the solution using allPlots() as:using PrettyPlots\nallPlots(n)"
},

{
    "location": "tutorials/Brachistochrone/main.html#Optional-plot-settings-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Optional plot settings",
    "category": "section",
    "text": "Many of the plot settings can be modified using the plotSettings() function. For instance;plotSettings(;(:size=>(700,700)));allPlots() automatically plots the solution to all of the state and control variables. In this problem, we may be interested in comparing two states against one another which can be done using the statePlot() function as:statePlot(n,1,1,2)For this case, there are four things that need to be passed to statePlots():Argument Name Description\n1 n object that holds the entire optimal control problem\n2 idx reference to solution number used when we start solving mpc problems\n3 st1 state number for xaxis\n4 st2 state number for yaxis"
},

{
    "location": "tutorials/Brachistochrone/main.html#Data-Orginization-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Data Orginization",
    "category": "section",
    "text": "All of the states, control variables and time vectors are stored in an array of Dataframes called n.r.dfsn.r.dfsIt is an array because the problem is designed to be solved multiple times in a receding time horizon. The variables can be accessed like this:n.r.dfs[1][:x][1:4]"
},

{
    "location": "tutorials/Brachistochrone/main.html#Optimization-Data-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Optimization Data",
    "category": "section",
    "text": "n.r.dfs_optThe sailent optimization data is stored in the table aboveVariable Description\nt_solve cpu time for optimization problem\nobj_val objective function value\niter_num a variable for a higher-level algorithm, often these problems are nestedOne thing that may be noticed is the long time that it takes to solve the problem. This is typical for the first optimization, but after that even if the problem is modified the optimization time is greatly reduced."
},

{
    "location": "tutorials/Brachistochrone/main.html#For-instance,-let's-re-run-the-optimization:-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "For instance, let's re-run the optimization:",
    "category": "section",
    "text": "optimize!(n);\nn.r.dfs_opt[2][:t_solve]"
},

{
    "location": "tutorials/Brachistochrone/main.html#Costate-visualization-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Costate visualization",
    "category": "section",
    "text": "For ps methods the costates can also be calculates asX0=[0.0,0.0,0.0]\nXF=[2.,-2.,NaN]\nn=define(numStates=3,numControls=1,X0=X0,XF=XF)\nstates!(n,[:x,:y,:v],descriptions=[\"x(t)\",\"y(t)\",\"v(t)\"])\ncontrols!(n,[:u],descriptions=[\"u(t)\"])\ndx=[:(v[j]*sin(u[j])),:(-v[j]*cos(u[j])),:(9.81*cos(u[j]))]\ndynamics!(n,dx)\nn.s.evalCostates = true\nconfigure!(n;(:Nck=>[100]),(:finalTimeDV=>true));\n@NLobjective(n.mdl,Min,n.tf)\noptimize!(n);\nusing PrettyPlots\nallPlots(n)Notice how the control jumps down for a bit, that is due to the equivalence of cos(n*2pi) for any integer n."
},

{
    "location": "tutorials/Brachistochrone/main.html#Save-results-1",
    "page": "Quick Ex#1: Brachistochrone",
    "title": "Save results",
    "category": "section",
    "text": "While some results are save automatically, state, control, and costate (if applicable) data (about the collocation points and the Lagrange polynomial that runs through them) can be saved with the function saveData() as:saveData(n)"
},

{
    "location": "tutorials/MoonLander/main.html#",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Quick Ex#2: Moon Lander",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/MoonLander/main.html#Quick-Ex#2:-Moon-Lander-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Quick Ex#2: Moon Lander",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/MoonLander/main.html#Given:-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Given:",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/MoonLander/main.html#A-space-ship-landing-on-the-moon-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "A space-ship landing on the moon",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/MoonLander/main.html#Dynamic-Constraints-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Dynamic Constraints",
    "category": "section",
    "text": "dotx_1(t)=x_2(t)dotx_2(t)=u(t)-g"
},

{
    "location": "tutorials/MoonLander/main.html#Boundary-Conditions-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Boundary Conditions",
    "category": "section",
    "text": "x_1(0)=10 qquad x_1(t_f)=0x_2(0)=-2 qquad x_2(t_f)=0"
},

{
    "location": "tutorials/MoonLander/main.html#Control-Limits-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Control Limits",
    "category": "section",
    "text": "u_1_min=0u_1_max=3"
},

{
    "location": "tutorials/MoonLander/main.html#Find:-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Find:",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/MoonLander/main.html#The-track-that-minimizes-time-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "The track that minimizes time",
    "category": "section",
    "text": "J=int_0^tf u(t) dt"
},

{
    "location": "tutorials/MoonLander/main.html#Solution:-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Solution:",
    "category": "section",
    "text": "In this problem, we put the bounds directly into define(). Also, now we have constant limits on the control variables and those can be added as shown below This problem can be found here."
},

{
    "location": "tutorials/MoonLander/main.html#Packages-that-will-be-used-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Packages that will be used",
    "category": "section",
    "text": "using NLOptControl\nnothing # hide"
},

{
    "location": "tutorials/MoonLander/main.html#Define-the-Problem:-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Define the Problem:",
    "category": "section",
    "text": "In this problem, we put the bounds directly into define(). Also, now we have constant limits on the control variables and those can be added as shown belown=define(numStates=2,numControls=1,X0=[10.,-2],XF=[0.,0.],CL=[0.],CU=[3.]);\nnothing # hide"
},

{
    "location": "tutorials/MoonLander/main.html#State-and-Control-Names-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "State and Control Names",
    "category": "section",
    "text": "The state and control variables are by default, x1x2 and u1u2, but they can be changed with the following commands:states!(n,[:h,:v];descriptions=[\"h(t)\",\"v(t)\"]);\ncontrols!(n,[:T];descriptions=[\"T(t)\"]);Next, now that the problem is configured, all of the state and control variables are stored in JuMP Arrays, n.r.x[:,:] and n.r.u[:,:], respectively. For instance;typeof(n.r.x)"
},

{
    "location": "tutorials/MoonLander/main.html#Differential-Equations-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Differential Equations",
    "category": "section",
    "text": "dx=[:(v[j]),:(T[j]-1.625)]\ndynamics!(n,dx)\nnothing # hide"
},

{
    "location": "tutorials/MoonLander/main.html#Configure-the-Problem:-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Configure the Problem:",
    "category": "section",
    "text": "configure!(n;(:finalTimeDV=>true));\nnothing # hide"
},

{
    "location": "tutorials/MoonLander/main.html#Integral-Terms-in-the-Cost-Function-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Integral Terms in the Cost Function",
    "category": "section",
    "text": "integrate!() is used to make terms that can be added to the cost function that need to be integrated. When calling this function an expression must be passed:In this example the first control variable Tneeds to be integrated, it must be passed in an expression :() with the index [j]. To do this, integrate!() can be used as:obj=integrate!(n,:(T[j]));\n# Now this term can be added as the objective function and the problem can be solved\n@NLobjective(n.mdl, Min, obj);\nnothing # hide"
},

{
    "location": "tutorials/MoonLander/main.html#Optimize-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Optimize",
    "category": "section",
    "text": "optimize!(n);\nnothing # hide"
},

{
    "location": "tutorials/MoonLander/main.html#Post-Process-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Post Process",
    "category": "section",
    "text": "using PrettyPlots\nallPlots(n)"
},

{
    "location": "tutorials/MoonLander/main.html#Other-Dynamic-Constraint-Methods-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Other Dynamic Constraint Methods",
    "category": "section",
    "text": "Currently there are three different methods to ensure that the dyanamic constraints are satisfied and they are set when configure!() is called using the :integrationScheme key. They are listed below::integrateScheme Description\n:lgrExplicit default scheme; implementation derivative constraints in hp-pseudospecral method\n:lgrImplicit implementation of integral constraints in hp-pseudospecral method\n:bkwEuler approximate using backward euler method\n:trapezoidal approximate using trapezoidal methodThe later two are time-marching methods and default number of points is 100, but that can be changed by setting N. So, the above problem can be solved using one of the time-marching schemes as:n=define(numStates=2,numControls=1,X0=[10.,-2],XF=[0.,0.],CL=[0.],CU=[3.]);\nstates!(n,[:h,:v];descriptions=[\"h(t)\",\"v(t)\"]);\ncontrols!(n,[:T];descriptions=[\"T(t)\"]);\ndx=[:(v[j]),:(T[j]-1.625)]\ndynamics!(n,dx)\nconfigure!(n,N=200;(:integrationScheme=>:trapezoidal),(:finalTimeDV=>true));\nobj=integrate!(n,:(T[j]));\n@NLobjective(n.mdl, Min, obj);\noptimize!(n);\nallPlots(n)"
},

{
    "location": "tutorials/MoonLander/main.html#Constraints-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Constraints",
    "category": "section",
    "text": "Often when building a model and using it to solve an optimal control problem, their are issues associated with infeasibility. NLOptControl has functionality to help deal with these issues. For instance, the dual infeasibility values can stored and quickly viewed. They are stored in an array of DataFrames which can be referenced with n.r.dfs_con as:n.r.dfs_conIt is empty, because by default this data is not calculated and stored. This option can be turned on by modifying the settings for the problem:n.s.evalConstraintsn.s.evalConstraints=true;\noptimize!(n);\nn.r.dfs_conevalMaxDualInf(n)The last function called, searches through all of the dual infeasibilities to find the largest value. As, this problem is, it is feasible and optimal. But if there was an issue, often looking for high values in these DataFrame structures is the quickest way to figure out the constraints that are giving the solver trouble."
},

{
    "location": "tutorials/MoonLander/main.html#Tolerances-1",
    "page": "Quick Ex#2: Moon Lander",
    "title": "Tolerances",
    "category": "section",
    "text": "If there was an example where the dual infeasibility value for one or more of the variables was very high, but the actual constraint is only being violated slightly (by some reasonable amount) then the tolerances on the initial and terminal states can be adjusted. This will also improve the solve time, so it is good practice to set these to reasonable values. For instance, in the Moon Lander example, we can set them as:n=define(numStates=2,numControls=1,X0=[10.,-2],XF=[0.,0.],CL=[0.],CU=[3.]);\nstates!(n,[:h,:v];descriptions=[\"h(t)\",\"v(t)\"]);\ncontrols!(n,[:T];descriptions=[\"T(t)\"]);\ndx=[:(v[j]),:(T[j]-1.625)]\ndynamics!(n,dx)\nXF_tol=[2.0,0.5];\nX0_tol=[0.05,0.05];\ndefineTolerances!(n;X0_tol=X0_tol,XF_tol=XF_tol);\nconfigure!(n,N=50;(:integrationScheme=>:bkwEuler),(:finalTimeDV=>true));\nobj=integrate!(n,:(T[j]));\n@NLobjective(n.mdl, Min, obj);\noptimize!(n);\nallPlots(n)"
},

{
    "location": "tutorials/BrysonDenham/main.html#",
    "page": "Bryson Denham",
    "title": "Bryson Denham",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/BrysonDenham/main.html#Bryson-Denham-1",
    "page": "Bryson Denham",
    "title": "Bryson Denham",
    "category": "section",
    "text": "This problem can be found here."
},

{
    "location": "tutorials/BrysonDenham/main.html#Packages-that-will-be-used-1",
    "page": "Bryson Denham",
    "title": "Packages that will be used",
    "category": "section",
    "text": "using NLOptControl\nnothing # hide"
},

{
    "location": "tutorials/BrysonDenham/main.html#Define-the-Problem:-1",
    "page": "Bryson Denham",
    "title": "Define the Problem:",
    "category": "section",
    "text": "n=define(numStates=2,numControls=1,X0=[0.,1],XF=[0.,-1.],XL=[0.,NaN],XU=[1/9,NaN]);\nnothing # hide"
},

{
    "location": "tutorials/BrysonDenham/main.html#Differential-Equations-1",
    "page": "Bryson Denham",
    "title": "Differential Equations",
    "category": "section",
    "text": "dx=[:(x2[j]),:(u1[j])]\ndynamics!(n,dx)\nnothing # hide"
},

{
    "location": "tutorials/BrysonDenham/main.html#Configure-the-Problem-1",
    "page": "Bryson Denham",
    "title": "Configure the Problem",
    "category": "section",
    "text": "configure!(n;(:Nck=>[100]),(:finalTimeDV=>true));\nnothing # hide"
},

{
    "location": "tutorials/BrysonDenham/main.html#Objective-Function-1",
    "page": "Bryson Denham",
    "title": "Objective Function",
    "category": "section",
    "text": "obj=integrate!(n,:(0.5*u1[j]^2));\n@NLobjective(n.mdl,Min,obj);\nnothing # hide"
},

{
    "location": "tutorials/BrysonDenham/main.html#Optimize-1",
    "page": "Bryson Denham",
    "title": "Optimize",
    "category": "section",
    "text": "optimize!(n);\nnothing # hide"
},

{
    "location": "tutorials/BrysonDenham/main.html#Post-Process-1",
    "page": "Bryson Denham",
    "title": "Post Process",
    "category": "section",
    "text": "using PrettyPlots\nallPlots(n)"
},

{
    "location": "tutorials/Beam/main.html#",
    "page": "Beam Problem",
    "title": "Beam Problem",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/Beam/main.html#Beam-Problem-1",
    "page": "Beam Problem",
    "title": "Beam Problem",
    "category": "section",
    "text": "An optimal control version of the Singly Supported NonLinear BEAM problem.\nThe energy of a beam of length 1 compressed by a force P is to be minimized.  \nThe control variable is the derivative of the deflection angle.This problem can be found here."
},

{
    "location": "tutorials/Beam/main.html#Packages-that-will-be-used-1",
    "page": "Beam Problem",
    "title": "Packages that will be used",
    "category": "section",
    "text": "using NLOptControl\nnothing # hide"
},

{
    "location": "tutorials/Beam/main.html#Define-and-Configure-the-Problem:-1",
    "page": "Beam Problem",
    "title": "Define and Configure the Problem:",
    "category": "section",
    "text": "n=define(numStates=2,numControls=1,XL=[-0.05,-1.0],XU=[-0.05,1.0]);\nnothing # hide"
},

{
    "location": "tutorials/Beam/main.html#Differential-Equations-1",
    "page": "Beam Problem",
    "title": "Differential Equations",
    "category": "section",
    "text": "dx=[:(sin(x2[j])),:(u1[j])]\ndynamics!(n,dx)\nnothing # hide"
},

{
    "location": "tutorials/Beam/main.html#Configure-the-Problem-1",
    "page": "Beam Problem",
    "title": "Configure the Problem",
    "category": "section",
    "text": "configure!(n;(:integrationScheme=>:trapezoidal),(:finalTimeDV=>false),(:tf=>1.0));\nnothing # hide"
},

{
    "location": "tutorials/Beam/main.html#Objective-Function-1",
    "page": "Beam Problem",
    "title": "Objective Function",
    "category": "section",
    "text": "obj=integrate!(n,:( u1[j]^2 + 350*cos(x2[j]) ) )\n@NLobjective(n.mdl,Min,obj);\nnothing # hide"
},

{
    "location": "tutorials/Beam/main.html#Optimize-1",
    "page": "Beam Problem",
    "title": "Optimize",
    "category": "section",
    "text": "optimize!(n);\nnothing # hide"
},

{
    "location": "tutorials/Beam/main.html#Post-Process-1",
    "page": "Beam Problem",
    "title": "Post Process",
    "category": "section",
    "text": "using PrettyPlots\nallPlots(n)"
},

{
    "location": "tutorials/HyperSensitive/main.html#",
    "page": "HyperSensitive",
    "title": "HyperSensitive",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/HyperSensitive/main.html#HyperSensitive-1",
    "page": "HyperSensitive",
    "title": "HyperSensitive",
    "category": "section",
    "text": "This problem can be found here."
},

{
    "location": "tutorials/HyperSensitive/main.html#Packages-that-will-be-used-1",
    "page": "HyperSensitive",
    "title": "Packages that will be used",
    "category": "section",
    "text": "using NLOptControl\nnothing # hide"
},

{
    "location": "tutorials/HyperSensitive/main.html#Define-the-Problem:-1",
    "page": "HyperSensitive",
    "title": "Define the Problem:",
    "category": "section",
    "text": "n=define(numStates=1,numControls=1,X0=[1.5],XF=[1.])\nnothing # hide"
},

{
    "location": "tutorials/HyperSensitive/main.html#Differential-Equations-1",
    "page": "HyperSensitive",
    "title": "Differential Equations",
    "category": "section",
    "text": "dx=[:(-x1[j]^3+u1[j])]\ndynamics!(n,dx)\nnothing # hide"
},

{
    "location": "tutorials/HyperSensitive/main.html#Configure-the-Problem:-1",
    "page": "HyperSensitive",
    "title": "Configure the Problem:",
    "category": "section",
    "text": "configure!(n,Nck=[3,3,3,3,3,3,3,3,3,3,3,3];(:finalTimeDV=>false),(:tf=>10000.0))\nnothing # hide"
},

{
    "location": "tutorials/HyperSensitive/main.html#Objective-Function-1",
    "page": "HyperSensitive",
    "title": "Objective Function",
    "category": "section",
    "text": "obj=integrate!(n,:( 0.5*x1[j]^2 + 0.5*u1[j]^2) )\n@NLobjective(n.mdl,Min,obj);"
},

{
    "location": "tutorials/HyperSensitive/main.html#Optimize-1",
    "page": "HyperSensitive",
    "title": "Optimize",
    "category": "section",
    "text": "optimize!(n);\nnothing # hide"
},

{
    "location": "tutorials/HyperSensitive/main.html#Post-Process-1",
    "page": "HyperSensitive",
    "title": "Post Process",
    "category": "section",
    "text": "using PrettyPlots\nplotSettings(;(:size=>(1200,1200)));\nallPlots(n)"
},

{
    "location": "tutorials/RobotArm/main.html#",
    "page": "RobotArm",
    "title": "RobotArm",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/RobotArm/main.html#RobotArm-1",
    "page": "RobotArm",
    "title": "RobotArm",
    "category": "section",
    "text": "This problem can be found here.  although that example is missing initial and final state constraints and limits on x4"
},

{
    "location": "tutorials/RobotArm/main.html#Packages-that-will-be-used-1",
    "page": "RobotArm",
    "title": "Packages that will be used",
    "category": "section",
    "text": "using NLOptControl\nnothing # hide"
},

{
    "location": "tutorials/RobotArm/main.html#Define-the-Problem:-1",
    "page": "RobotArm",
    "title": "Define the Problem:",
    "category": "section",
    "text": "n=define(numStates=6,numControls=3,X0=[9/2,0.0,0.0,0.0,pi/4,0.0],XF=[9/2,0.0,2*pi/3,0.0,pi/4,0.0],XL=[NaN,NaN,NaN,0.0,NaN,NaN],XU=[NaN,NaN,NaN,1.0,NaN,NaN],CL=[-1.,-1.,-1.],CU=[1.,1.,1.])\nnothing # hide"
},

{
    "location": "tutorials/RobotArm/main.html#Constants-1",
    "page": "RobotArm",
    "title": "Constants",
    "category": "section",
    "text": "EP=2*eps(); # to avoid divide/0\nQ=5;\nnothing # hide"
},

{
    "location": "tutorials/RobotArm/main.html#Differential-Equations-1",
    "page": "RobotArm",
    "title": "Differential Equations",
    "category": "section",
    "text": "# Diff Eqs\ndx=[:(x2[j]);\n    :(u1[j]/$Q);\n    :(x4[j]);\n    :(u2[j]/(((($Q-x1[j])^3+x1[j]^3)/3*sin(x5[j])^2)+$EP));\n    :(x6[j]);\n    :(u3[j]/(((($Q-x1[j])^3+x1[j]^3)/3 )+$EP))]\nnothing # hide# expressions\nI_t= :((($Q-x1[j])^3+x1[j]^3)/3*sin(x5[j])^2);\nI_p= :((($Q-x1[j])^3+x1[j]^3)/3 );\n\n# Diff Eqs\ndx=Array{Expr}(6,);\ndx[1]=:(x2[j]);\ndx[2]=:(u1[j]/$Q);\ndx[3]=:(x4[j]);\ndx[4]=:(u2[j]/($I_t+$EP));\ndx[5]=:(x6[j]);\ndx[6]=:(u3[j]/($I_p+$EP));Then add the differential equations to the model:dynamics!(n,dx)"
},

{
    "location": "tutorials/RobotArm/main.html#Configure-the-Problem:-1",
    "page": "RobotArm",
    "title": "Configure the Problem:",
    "category": "section",
    "text": "configure!(n;(:finalTimeDV=>true))\nnothing # hide"
},

{
    "location": "tutorials/RobotArm/main.html#Objective-Function-1",
    "page": "RobotArm",
    "title": "Objective Function",
    "category": "section",
    "text": "@NLobjective(n.mdl,Min,n.tf);\nnothing # hide"
},

{
    "location": "tutorials/RobotArm/main.html#Optimize-1",
    "page": "RobotArm",
    "title": "Optimize",
    "category": "section",
    "text": "optimize!(n);\nnothing # hide"
},

{
    "location": "tutorials/RobotArm/main.html#Post-Process-1",
    "page": "RobotArm",
    "title": "Post Process",
    "category": "section",
    "text": "using PrettyPlots\nallPlots(n)"
},

{
    "location": "tutorials/Rocket/main.html#",
    "page": "Rocket",
    "title": "Rocket",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/Rocket/main.html#Rocket-1",
    "page": "Rocket",
    "title": "Rocket",
    "category": "section",
    "text": "This problem can be found here."
},

{
    "location": "tutorials/Rocket/main.html#Packages-that-will-be-used-1",
    "page": "Rocket",
    "title": "Packages that will be used",
    "category": "section",
    "text": "using NLOptControl\nnothing # hide"
},

{
    "location": "tutorials/Rocket/main.html#Constants-1",
    "page": "Rocket",
    "title": "Constants",
    "category": "section",
    "text": "# Note that all parameters in the model have been normalized\n# to be dimensionless. See the COPS3 paper for more info.\nh_0 = 1    # Initial height\nv_0 = 0    # Initial velocity\nm_0 = 1    # Initial mass\ng_0 = 1    # Gravity at the surface\n\n# Parameters\nT_c = 3.5  # Used for thrust\nh_c = 500  # Used for drag\nv_c = 620  # Used for drag\nm_c = 0.6  # Fraction of initial mass left at end\n\n# Derived parameters\nc     = 0.5*sqrt(g_0*h_0)  # Thrust-to-fuel mass\nm_f   = m_c*m_0            # Final mass\nD_c   = 0.5*v_c*m_0/g_0    # Drag scaling\nT_max = T_c*g_0*m_0        # Maximum thrust\nnothing # hide"
},

{
    "location": "tutorials/Rocket/main.html#Define-the-Problem:-1",
    "page": "Rocket",
    "title": "Define the Problem:",
    "category": "section",
    "text": "n=define(numStates=3,numControls=1,X0=[h_0,v_0,m_0],XF=[NaN,NaN,m_f],XL=[h_0,v_0,m_f],XU=[NaN,NaN,m_0],CL=[0.0],CU=[T_max]);\nnothing # hide"
},

{
    "location": "tutorials/Rocket/main.html#State-and-Control-Names-1",
    "page": "Rocket",
    "title": "State and Control Names",
    "category": "section",
    "text": "states!(n,[:h,:v,:m],descriptions=[\"height (t)\",\"velocity (t)\",\"mass (t)\"]);\ncontrols!(n,[:T],descriptions=[\"thrust (t)\"]);"
},

{
    "location": "tutorials/Rocket/main.html#Differential-Equations-1",
    "page": "Rocket",
    "title": "Differential Equations",
    "category": "section",
    "text": "dx=[:(v[j]);\n:((T[j]-($D_c*v[j]^2*exp(-$h_c*(h[j]-$h_0)/$h_0)))/m[j]-($g_0*($h_0/h[j])^2));\n:(-T[j]/$c)];Drag=:($D_c*v[j]^2*exp(-$h_c*(h[j]-$h_0)/$h_0));\nGrav=:($g_0*($h_0/h[j])^2);\ndx=Array{Expr}(3,);\ndx[1]=:(v[j]);\ndx[2]=:((T[j]-$Drag)/m[j]-$Grav)\ndx[3]=:(-T[j]/$c);Then add the differential equations to the model:dynamics!(n,dx)"
},

{
    "location": "tutorials/Rocket/main.html#Configure-the-Problem:-1",
    "page": "Rocket",
    "title": "Configure the Problem:",
    "category": "section",
    "text": "configure!(n;(:finalTimeDV=>true));\nnothing # hide"
},

{
    "location": "tutorials/Rocket/main.html#Objective-Function-1",
    "page": "Rocket",
    "title": "Objective Function",
    "category": "section",
    "text": "@NLobjective(n.mdl,Max,n.r.x[end,1]);\nnothing # hide"
},

{
    "location": "tutorials/Rocket/main.html#Optimize-1",
    "page": "Rocket",
    "title": "Optimize",
    "category": "section",
    "text": "optimize!(n);\nnothing # hide"
},

{
    "location": "tutorials/Rocket/main.html#Post-Process-1",
    "page": "Rocket",
    "title": "Post Process",
    "category": "section",
    "text": "using PrettyPlots\nallPlots(n)"
},

{
    "location": "tutorials/Unicycle/main.html#",
    "page": "Unicycle Model",
    "title": "Unicycle Model",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/Unicycle/main.html#Unicycle-Model-1",
    "page": "Unicycle Model",
    "title": "Unicycle Model",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/Unicycle/main.html#Given:-1",
    "page": "Unicycle Model",
    "title": "Given:",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/Unicycle/main.html#A-unicycle-trying-to-get-to-the-goal-1",
    "page": "Unicycle Model",
    "title": "A unicycle trying to get to the goal",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/Unicycle/main.html#Dynamic-Constraints-1",
    "page": "Unicycle Model",
    "title": "Dynamic Constraints",
    "category": "section",
    "text": "dotx_1(t)=x_4(t)cos(u_1(t))dotx_2(t)=x_4(t)sin(u_1(t))dotx_3(t)=u_1(t)dotx_4(t)=u_2(t)"
},

{
    "location": "tutorials/Unicycle/main.html#Boundary-Conditions-1",
    "page": "Unicycle Model",
    "title": "Boundary Conditions",
    "category": "section",
    "text": "x_1(0)=0 qquad x_1(t_f)=freex_2(0)=pi2qquad x_2(t_f)=freex_3(0)=05qquad x_3(t_f)=freex_4(0)=0qquad x_4(t_f)=free"
},

{
    "location": "tutorials/Unicycle/main.html#Find:-1",
    "page": "Unicycle Model",
    "title": "Find:",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/Unicycle/main.html#The-control-signals-that-minimize-distance-to-goal-(x_g,y_g)-within-tplan-1",
    "page": "Unicycle Model",
    "title": "The control signals that minimize distance to goal (x_gy_g) within tplan",
    "category": "section",
    "text": "J=(x_1(t_f)-x_g)^2 + (x_2(t_f)-y_g)^2)"
},

{
    "location": "tutorials/Unicycle/main.html#Solution:-1",
    "page": "Unicycle Model",
    "title": "Solution:",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/Unicycle/main.html#Packages-that-will-be-used-1",
    "page": "Unicycle Model",
    "title": "Packages that will be used",
    "category": "section",
    "text": "using NLOptControl\nnothing # hide"
},

{
    "location": "tutorials/Unicycle/main.html#Define-the-Problem-1",
    "page": "Unicycle Model",
    "title": "Define the Problem",
    "category": "section",
    "text": "Next let's write down the boundary conditions into an array:X0=[0,0,pi/2,0]\nXL=[-10,-10,-pi,0]\nXU=[10,10,pi,1]\nCL=[-1,-3]\nCU=[1,3]\nnothing # hide"
},

{
    "location": "tutorials/Unicycle/main.html#Define-the-Problem-2",
    "page": "Unicycle Model",
    "title": "Define the Problem",
    "category": "section",
    "text": "n = define(numStates=4,numControls=2,X0=X0,XL=XL,XU=XU,CL=CL,CU=CU)\nnothing # hide"
},

{
    "location": "tutorials/Unicycle/main.html#State-and-Control-Names-1",
    "page": "Unicycle Model",
    "title": "State and Control Names",
    "category": "section",
    "text": "names=[:x,:y,:psi,:ux]\ndescriptions=[\"X (m)\",\"Y (m)\",\"Yaw Angle (rad)\",\"Longitudinal Velocity (m/s)\"]\nstates!(n,names,descriptions=descriptions)\nnames = [:r,:ax]\ndescriptions=[\"Yaw Rate (rad/s)\",\"Longitudinal Acceleration (m/s^2)\"];\ncontrols!(n,names,descriptions=descriptions)\nnothing # hide"
},

{
    "location": "tutorials/Unicycle/main.html#Differential-Equations-1",
    "page": "Unicycle Model",
    "title": "Differential Equations",
    "category": "section",
    "text": "dx = [:(ux[j]*cos(psi[j])),:(ux[j]*sin(psi[j])),:(r[j]),:(ax[j])]\ndynamics!(n,dx)\nnothing # hide"
},

{
    "location": "tutorials/Unicycle/main.html#Define-and-Configure-the-Problem:-1",
    "page": "Unicycle Model",
    "title": "Define and Configure the Problem:",
    "category": "section",
    "text": "tplan = 7.0\nconfigure!(n;Nck=[50],(:finalTimeDV=>false), (:tf=>tplan))\nnothing # hide"
},

{
    "location": "tutorials/Unicycle/main.html#Objective-Function-1",
    "page": "Unicycle Model",
    "title": "Objective Function",
    "category": "section",
    "text": "x = n.r.x[:,1]; y = n.r.x[:,2]; # pointers to JuMP variables\nxg = -2; yg = 4;\n@NLobjective(n.mdl, Min, (x[end]-xg)^2 + (y[end]-yg)^2)\nnothing # hide"
},

{
    "location": "tutorials/Unicycle/main.html#Optimize-1",
    "page": "Unicycle Model",
    "title": "Optimize",
    "category": "section",
    "text": "optimize!(n)\nnothing # hide"
},

{
    "location": "tutorials/Unicycle/main.html#Post-Process-1",
    "page": "Unicycle Model",
    "title": "Post Process",
    "category": "section",
    "text": "using PrettyPlots\nplotSettings(;(:size=>(700,700)))\nallPlots(n)Taking a closer look at the position:plotSettings(;(:size=>(400,400)));\nstatePlot(n,1,1,2;(:lims=>false))\nxlims!(-3,2);\nylims!(0,5);"
},

{
    "location": "tutorials/KinematicBicycle/main.html#",
    "page": "Kinematic Bicycle Model",
    "title": "Kinematic Bicycle Model",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/KinematicBicycle/main.html#Kinematic-Bicycle-Model-1",
    "page": "Kinematic Bicycle Model",
    "title": "Kinematic Bicycle Model",
    "category": "section",
    "text": "The vehicle model comes from the BARC-project"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Packages-that-will-be-used-1",
    "page": "Kinematic Bicycle Model",
    "title": "Packages that will be used",
    "category": "section",
    "text": "using NLOptControl,Parameters,VehicleModels\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Parameters-form-VehicleModels.jl-1",
    "page": "Kinematic Bicycle Model",
    "title": "Parameters form VehicleModels.jl",
    "category": "section",
    "text": "pa=VparaKB(x0_=0.);  \n@unpack_VparaKB pa # vehicle parameters\nX0=[x0_,y0_,psi0_,u0_];\nXF=[NaN,NaN,NaN,NaN];\nXL=[x_min,y_min,psi_min,u_min];\nXU=[x_max,y_max,psi_max,u_max];\nCL=[sa_min,ax_min];\nCU=[sa_max,ax_max];\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Define-the-Problem-1",
    "page": "Kinematic Bicycle Model",
    "title": "Define the Problem",
    "category": "section",
    "text": "n=define(numStates=4,numControls=2,X0=X0,XF=XF,XL=XL,XU=XU,CL=CL,CU=CU);\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Define-Case-1",
    "page": "Kinematic Bicycle Model",
    "title": "Define Case",
    "category": "section",
    "text": "## Goal\ntype Goal\n    name\n    x_ref\n    y_ref\nend\nfunction Goal()\n       Goal(:test,\n             0.,\n            100.);\nend\n\n# Obstacle\ntype Obs\n  A\n  B\n  s_x\n  s_y\n  X0\n  Y0\nend\nfunction Obs()\n  Obs([5.],\n      [5.],\n      [0.0],\n      [0.0],\n      [0.],\n      [50.]);\nend\n\nabstract type AbstractCase end\ntype Case <: AbstractCase\n g::Goal        # goal data\n o::Obs         # obstacle data\nend\n\nc=Case(Goal(),Obs())\n\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#State-and-Control-Names-1",
    "page": "Kinematic Bicycle Model",
    "title": "State and Control Names",
    "category": "section",
    "text": "names=[:x,:y,:psi,:ux];\ndescriptions=[\"X (m)\",\"Y (m)\",\"Yaw Angle (rad)\",\"Longitudinal Velocity (m/s)\"];\nstates!(n,names,descriptions=descriptions)\nnames = [:sa,:ax];\ndescriptions=[\"Steering Angle (rad)\",\"Longitudinal Acceleration (m/s^2)\"];\ncontrols!(n,names,descriptions=descriptions);\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Differential-Equations-1",
    "page": "Kinematic Bicycle Model",
    "title": "Differential Equations",
    "category": "section",
    "text": "dynamics!(n,KinematicBicycle(pa))\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Define-and-Configure-the-Problem:-1",
    "page": "Kinematic Bicycle Model",
    "title": "Define and Configure the Problem:",
    "category": "section",
    "text": "configure!(n,Nck=[12,10,8];(:finalTimeDV=>true));\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Nonlinear-Obstacle-Avoidance-Constraints-1",
    "page": "Kinematic Bicycle Model",
    "title": "Nonlinear Obstacle Avoidance Constraints",
    "category": "section",
    "text": "sm = 2;\nx=n.r.x[:,1];y=n.r.x[:,2]; # pointers to JuMP variables\nobs_con=@NLconstraint(n.mdl, [i=1:n.numStatePoints-1], 1 <= ((x[(i+1)]-c.o.X0[1])^2)/((c.o.A[1]+sm)^2) + ((y[(i+1)]-c.o.Y0[1])^2)/((c.o.B[1]+sm)^2));\nnewConstraint!(n,obs_con,:obs_con);\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Linear-State-Tolerances-1",
    "page": "Kinematic Bicycle Model",
    "title": "Linear State Tolerances",
    "category": "section",
    "text": "mXL=Any[false,false,false,false];\nmXU=Any[false,false,false,-1];  # set to false if you don't want to taper that side\nlinearStateTolerances!(n;mXL=mXL,mXU=mXU);\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Objective-Function-1",
    "page": "Kinematic Bicycle Model",
    "title": "Objective Function",
    "category": "section",
    "text": "@NLobjective(n.mdl, Min, n.tf + (n.r.x[end,1]-c.g.x_ref)^2 + (n.r.x[end,2]-c.g.y_ref)^2);\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Optimize-1",
    "page": "Kinematic Bicycle Model",
    "title": "Optimize",
    "category": "section",
    "text": "optimize!(n);\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Post-Process-1",
    "page": "Kinematic Bicycle Model",
    "title": "Post Process",
    "category": "section",
    "text": "using PrettyPlots\nplotSettings(;(:size=>(700,700)));\nallPlots(n)Notice the longitudinal velocity is pushed down to 29 m/s using the linearStateTolerances!() function.The state limits can be turned off in the plots with (:lims=>false) and the obstacle plot handle can be passed to statePlot() in the 5th argument and by using (:append=>true).plotSettings(;(:size=>(400,400)));\nobs=obstaclePlot(n,c)\nstatePlot(n,1,1,2,obs;(:append=>true),(:lims=>false))\nxlims!(-45,55);\nylims!(0,110);"
},

]}
