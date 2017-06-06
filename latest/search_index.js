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
    "text": "..."
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "There are several packages that need to be installed, to do this run:Pkg.clone(\"https://github.com/JuliaMPC/PrettyPlots.jl\")\nPkg.clone(\"https://github.com/JuliaMPC/VehicleModels.jl\")\nPkg.clone(\"https://github.com/JuliaMPC/NLOptControl.jl\")"
},

{
    "location": "index.html#Citation-1",
    "page": "Home",
    "title": "Citation",
    "category": "section",
    "text": "If you find this package useful, please cite this paper:@Conference{Febbo2017,\n  author    = {Huckleberry Febbo, Jiechao Liu, Paramsothy Jayakumar, Jeffrey L. Stein, Tulga Ersal},\n  title     = {Moving Obstacle Avoidance for Large, High-Speed Autonomous Ground Vehicles},\n  year      = {2017},\n  publisher = {IEEE}\n}"
},

{
    "location": "index.html#Tutorials-1",
    "page": "Home",
    "title": "Tutorials",
    "category": "section",
    "text": "For NLOptControl.jl there are several examples provided:Pages=[\n      \"tutorials/BrysonDenham/main.md\",\n      \"tutorials/Brachistochrone/main.md\",\n      \"tutorials/Brachistochrone/main_test.md\",\n      \"tutorials/HyperSensitive/main.md\",\n      \"tutorials/MoonLander/main.md\",\n      \"tutorials/KinematicBicycle/main.md\"\n       ]\nDepth=1"
},

{
    "location": "index.html#Background-Info-1",
    "page": "Home",
    "title": "Background Info",
    "category": "section",
    "text": "While detailed information on these approaches to discretizing infinite dimensional (or continuous) optimal control problems can be found (and comes from) this Ph.D. dissertation, this related journal publication and this technical report, the Background Information section will cover some basics.Pages = [\n    \"background/lagrange_poly.md\",\n    \"background/optimal_control.md\",\n    \"background/ocp.md\",\n    \"background/time_marching.md\",\n    \"background/pseudospectral_methods.md\",\n    \"background/hp-psuedospectral.md\"\n    ]\nDepth=1"
},

{
    "location": "index.html#Exported-Functions-1",
    "page": "Home",
    "title": "Exported Functions",
    "category": "section",
    "text": "The following link provides documentation all of the exported functions for NLOptControl.jl, VehicleModels.jl, and PrettyPlots.jl.Pages=[\n    \"functions/NLOptControl.md\",\n    \"functions/VehicleModels.md\",\n    \"functions/PrettyPlots.md\"\n    ]\nDepth=1"
},

{
    "location": "index.html#Acknowledgements-1",
    "page": "Home",
    "title": "Acknowledgements",
    "category": "section",
    "text": "Miles Lubin, https://jump.readthedocs.io/en/latest/ Chris Rackauckas, https://github.com/JuliaDiffEq/DifferentialEquations.jl"
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
    "text": "This problem can be found here.This example is using the @DiffEq() to define the differential equations, but currently this macro is limited to linear odes."
},

{
    "location": "tutorials/BrysonDenham/main.html#Packages-that-will-be-used-1",
    "page": "Bryson Denham",
    "title": "Packages that will be used",
    "category": "section",
    "text": "using NLOptControl,JuMP,PrettyPlots,Plots;gr()\nnothing # hide"
},

{
    "location": "tutorials/BrysonDenham/main.html#Differential-Equations-1",
    "page": "Bryson Denham",
    "title": "Differential Equations",
    "category": "section",
    "text": "@DiffEq(BrysonDenham,[x[j,2];u[j,1]])\nnothing # hide"
},

{
    "location": "tutorials/BrysonDenham/main.html#Define-and-Configure-the-Problem:-1",
    "page": "Bryson Denham",
    "title": "Define and Configure the Problem:",
    "category": "section",
    "text": "n=define!(;stateEquations=BrysonDenham,numStates=2,numControls=1,X0=[0.,1],XF=[0.,-1.],XL=[0.,NaN],XU=[1/9,NaN],CL=[NaN],CU=[NaN]);\nconfigure!(n;(:finalTimeDV=>false),(:tf=>1.0));\nnothing # hide"
},

{
    "location": "tutorials/BrysonDenham/main.html#Objective-Function-1",
    "page": "Bryson Denham",
    "title": "Objective Function",
    "category": "section",
    "text": "obj=integrate!(n,n.r.u[:,1];C=0.5,(:variable=>:control),(:integrand=>:squared));\n@NLobjective(n.mdl,Min,obj);\nnothing # hide"
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
    "text": "allPlots(n)"
},

{
    "location": "tutorials/Brachistochrone/main.html#",
    "page": "Brachistochrone",
    "title": "Brachistochrone",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/Brachistochrone/main.html#Brachistochrone-1",
    "page": "Brachistochrone",
    "title": "Brachistochrone",
    "category": "section",
    "text": "This problem can be found here."
},

{
    "location": "tutorials/Brachistochrone/main.html#Packages-that-will-be-used-1",
    "page": "Brachistochrone",
    "title": "Packages that will be used",
    "category": "section",
    "text": "using NLOptControl,JuMP,PrettyPlots,Plots;gr()\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main.html#Differential-Equations-1",
    "page": "Brachistochrone",
    "title": "Differential Equations",
    "category": "section",
    "text": "function Brachistochrone{T<:Any}(n::NLOpt,x::Array{T,2},u::Array{T,2})\n  if n.s.integrationMethod==:tm; L=size(x)[1]; else L=size(x)[1]-1; end\n  dx = Array(Any,L,n.numStates)\n  dx[:,1]=@NLexpression(n.mdl, [j=1:L], x[j,3]*sin(u[j,1]) );\n  dx[:,2]=@NLexpression(n.mdl, [j=1:L], x[j,3]*cos(u[j,1]) );\n  dx[:,3]=@NLexpression(n.mdl, [j=1:L], 9.81*cos(u[j,1]) );\n  return dx\nend\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main.html#Define-and-Configure-the-Problem:-1",
    "page": "Brachistochrone",
    "title": "Define and Configure the Problem:",
    "category": "section",
    "text": "n=define!(;stateEquations=Brachistochrone,numStates=3,numControls=1,X0=[0.0,0.0,0.0],XF=[2.,2.,NaN],XL=[-NaN,-NaN,-NaN],XU=[NaN,NaN,NaN],CL=[-NaN],CU=[NaN]);\nconfigure!(n,Nck=[100];(:finalTimeDV=>true));\nnothing # hide\n"
},

{
    "location": "tutorials/Brachistochrone/main.html#Additional-Information-1",
    "page": "Brachistochrone",
    "title": "Additional Information",
    "category": "section",
    "text": "names=[:x,:y,:v]; descriptions=[\"x(t)\",\"y(t)\",\"v(t)\"];\nstateNames!(n,names,descriptions);\nnames=[:u]; descriptions=[\"u(t)\"];\ncontrolNames!(n,names,descriptions);\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main.html#Objective-Function-1",
    "page": "Brachistochrone",
    "title": "Objective Function",
    "category": "section",
    "text": "obj=integrate!(n,n.r.u[:,1];C=0.5,(:variable=>:control),(:integrand=>:squared));\n@NLobjective(n.mdl,Min,n.tf);\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main.html#Optimize-1",
    "page": "Brachistochrone",
    "title": "Optimize",
    "category": "section",
    "text": "optimize!(n);\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main.html#Post-Process-1",
    "page": "Brachistochrone",
    "title": "Post Process",
    "category": "section",
    "text": "allPlots(n)"
},

{
    "location": "tutorials/Brachistochrone/main_test.html#",
    "page": "Brachistochrone",
    "title": "Brachistochrone",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/Brachistochrone/main_test.html#Brachistochrone-1",
    "page": "Brachistochrone",
    "title": "Brachistochrone",
    "category": "section",
    "text": "This problem can be found here.This is a test of ODEdef()"
},

{
    "location": "tutorials/Brachistochrone/main_test.html#Packages-that-will-be-used-1",
    "page": "Brachistochrone",
    "title": "Packages that will be used",
    "category": "section",
    "text": "using NLOptControl,JuMP,PrettyPlots,Plots;gr()\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main_test.html#Differential-Equations-1",
    "page": "Brachistochrone",
    "title": "Differential Equations",
    "category": "section",
    "text": "@DiffEq(Brachistochrone,[x[j,3]*sin(u[j,1]);x[j,3]*cos(u[j,1]);9.81*cos(u[j,1])])\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main_test.html#Define-and-Configure-the-Problem:-1",
    "page": "Brachistochrone",
    "title": "Define and Configure the Problem:",
    "category": "section",
    "text": "n=define!(;stateEquations=Brachistochrone,numStates=3,numControls=1,X0=[0.0,0.0,0.0],XF=[2.,2.,NaN],XL=[-NaN,-NaN,-NaN],XU=[NaN,NaN,NaN],CL=[-NaN],CU=[NaN]);\nconfigure!(n,Nck=[100];(:finalTimeDV=>true));\nnothing # hide\n"
},

{
    "location": "tutorials/Brachistochrone/main_test.html#Additional-Information-1",
    "page": "Brachistochrone",
    "title": "Additional Information",
    "category": "section",
    "text": "names=[:x,:y,:v]; descriptions=[\"x(t)\",\"y(t)\",\"v(t)\"];\nstateNames!(n,names,descriptions);\nnames=[:u]; descriptions=[\"u(t)\"];\ncontrolNames!(n,names,descriptions);\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main_test.html#Objective-Function-1",
    "page": "Brachistochrone",
    "title": "Objective Function",
    "category": "section",
    "text": "obj=integrate!(n,n.r.u[:,1];C=0.5,(:variable=>:control),(:integrand=>:squared));\n@NLobjective(n.mdl,Min,n.tf);\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main_test.html#Optimize-1",
    "page": "Brachistochrone",
    "title": "Optimize",
    "category": "section",
    "text": "optimize!(n);\nnothing # hide"
},

{
    "location": "tutorials/Brachistochrone/main_test.html#Post-Process-1",
    "page": "Brachistochrone",
    "title": "Post Process",
    "category": "section",
    "text": "allPlots(n)"
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
    "text": "using NLOptControl,JuMP,PrettyPlots,Plots;gr()\nnothing # hide"
},

{
    "location": "tutorials/HyperSensitive/main.html#Differential-Equations-1",
    "page": "HyperSensitive",
    "title": "Differential Equations",
    "category": "section",
    "text": "function HyperSensitive{T<:Any}(n::NLOpt,x::Array{T,2},u::Array{T,2}) # dynamic constraint equations\n  if n.s.integrationMethod==:tm; L=size(x)[1]; else; L=size(x)[1]-1; end\n  dx=Array(Any,L,n.numStates);\n  dx[:,1]=@NLexpression(n.mdl, [j=1:L], -x[j,1]^3 + u[j,1] );\n  return dx\nend\nnothing # hide"
},

{
    "location": "tutorials/HyperSensitive/main.html#Define-and-Configure-the-Problem:-1",
    "page": "HyperSensitive",
    "title": "Define and Configure the Problem:",
    "category": "section",
    "text": "n=define!(;stateEquations=HyperSensitive,numStates=1,numControls=1,X0=[1.5],XF=[1.],XL=[NaN],XU=[NaN],CL=[NaN],CU=[NaN])\nconfigure!(n,N=100;(:integrationMethod => :tm),(:integrationScheme => :trapezoidal),(:finalTimeDV => false),(:tf => 10000.0))\nnothing # hide"
},

{
    "location": "tutorials/HyperSensitive/main.html#Objective-Function-1",
    "page": "HyperSensitive",
    "title": "Objective Function",
    "category": "section",
    "text": "obj1=integrate!(n,n.r.x[:,1];C=0.5,(:variable=>:control),(:integrand=>:squared))\nobj2=integrate!(n,n.r.u[:,1];C=0.5,(:variable=>:control),(:integrand=>:squared))\n@NLobjective(n.mdl,Min,obj1+obj2);"
},

{
    "location": "tutorials/HyperSensitive/main.html#Optimize-1",
    "page": "HyperSensitive",
    "title": "Optimize",
    "category": "section",
    "text": "optimize!(n)\nnothing # hide"
},

{
    "location": "tutorials/HyperSensitive/main.html#Post-Process-1",
    "page": "HyperSensitive",
    "title": "Post Process",
    "category": "section",
    "text": "allPlots(n)"
},

{
    "location": "tutorials/MoonLander/main.html#",
    "page": "Moon Lander",
    "title": "Moon Lander",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/MoonLander/main.html#Moon-Lander-1",
    "page": "Moon Lander",
    "title": "Moon Lander",
    "category": "section",
    "text": "First setup the packages that will be used:using NLOptControl,JuMP,PrettyPlots,Plots;gr()\nnothing # hideWhere, the object n is the object for the entire optimal control problem including: |setting               | keys        | descriptions           | | –––––––––– | –––––- | ––––––––––– | |n.s.integrationMethod | :tm         | time marching          |                        | :ps         | pseudospectral methods | n.s for settings n.r for results n.mpc for mpc dataNext define the basic differential equation used to model the system:const g = 1.62519; # m/s^2\nfunction MoonLander{T<:Any}(n::NLOpt,x::Array{T,2},u::Array{T,2}) # dynamic constraint equations\n  if n.s.integrationMethod==:tm; L=size(x)[1]; else L=size(x)[1]-1; end\n  dx = Array(Any,L,n.numStates)\n  dx[:,1] = @NLexpression(n.mdl, [j=1:L], x[j,2] );\n  dx[:,2] = @NLexpression(n.mdl, [j=1:L], u[j,1] - g);\n  return dx\nend\nnothing # hideMost of this code is boiler-plate and should be copied directly. The important things to note are thatu is the control variable matrix and x is the state variable matrix. So, in the above example the only thing that the user needs to modify is the right hand side of the dx[] expressions. The indecies for the number of the state or control variable are in the columns. For instance, x[:,2] represents the entire vector for second state variable.NOTE: eventually most of this code will be pushed to a lower level.  Now that the dynamic constraint equations have been established, the next step is to define the problem:n=define!(;stateEquations=MoonLander,numStates=2,numControls=1,X0=[10.,-2],XF=[0.,0.],XL=[NaN,NaN],XU=[NaN,NaN],CL=[0.],CU=[3.]);\nnothing # hideTo do this the user passes n, and defines the stateEquations to be the dynamic constraint equations defined in MoonLander().Basics: numStates = number of state variables numControls = number of control variables X0 = intial sttae TODO-> mention XL etc.There are several different ways to ensure that the stateEquations are satisfied that are set using the keys :integrationMethod and :integrationScheme. In this example the hp-Gaussian Quadrature Collocation Method is used with Radau Nodes. Finally, the final time may be either fixed and set before hand or it can be a variable. This option is set using the :finalTimeDV key and it is set to true in this example.configure!(n,Ni=4,Nck=[10,10,10,10];(:integrationMethod=>:ps),(:integrationScheme=> :lgrExplicit),(:finalTimeDV=>true));\nnothing # hideThe next parts are optional.Names and descriptions may be added to both the control and state variables as follows:names=[:h,:v]; descriptions = [\"h(t)\",\"v(t)\"]; stateNames!(n,names,descriptions);\nnothing # hideNOTE: The names will show up in the results data and the descriptions will show up in the graphsThe object r stores all of the results as well as both the control and state variables. For instance r.x[:,1] should now be used to access the entire vector for the first state.For generality, integrate!() will also be demonstrated in this example. integrate!() is used to add terms to the cost function that need to be integrated. Currently there are several forms that these integrals can take (more can be added). In this example the first control variable r.u[:,1] and sets up this variable to be integrated over the entire time of the control problem with the following line of code:obj=integrate!(n,n.r.u[:,1];C=1.0,(:variable=>:control),(:integrand=>:default));\nnothing # hideNext the cost function can be defined as:@NLobjective(n.mdl, Min, obj);\nnothing # hideAt this stage, the optimal control problem can be solved with:optimize!(n);\nnothing # hideThen, in order to quickly visualize the problem, functionality is also provided for automated visualization."
},

{
    "location": "tutorials/MoonLander/main.html#The-next-part-is-optional:-1",
    "page": "Moon Lander",
    "title": "The next part is optional:",
    "category": "section",
    "text": "The plot settings can be modified from the default using the following code:plotSettings(;(:mpc_lines =>[(4.0,:blue,:solid)]),(:size=>(700,700)));\nnothing # hideFinally, in order to plot all of the states and controls call:allPlots(n);"
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
    "text": "using NLOptControl,JuMP,Parameters,VehicleModels,PrettyPlots,Plots;gr()\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Parameters-form-VehicleModels.jl-1",
    "page": "Kinematic Bicycle Model",
    "title": "Parameters form VehicleModels.jl",
    "category": "section",
    "text": "pa=VparaKB(x0_=0.);  \n@unpack_VparaKB pa # vehicle parameters\nX0=[x0_,y0_,psi0_,u0_];\nXF=[NaN,NaN,NaN,NaN];\nXL=[x_min,y_min,psi_min,u_min];\nXU=[x_max,y_max,psi_max,u_max];\nCL=[sa_min,ax_min];\nCU=[sa_max,ax_max];\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Differential-Equations-1",
    "page": "Kinematic Bicycle Model",
    "title": "Differential Equations",
    "category": "section",
    "text": "n=define!(;stateEquations=KinematicBicycle,numStates=4,numControls=2,X0=X0,XF=XF,XL=XL,XU=XU,CL=CL,CU=CU);\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Add-Parameters-to-the-Model-1",
    "page": "Kinematic Bicycle Model",
    "title": "Add Parameters to the Model",
    "category": "section",
    "text": "n.params=[pa];   # vehicle parameters\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Define-and-Configure-the-Problem:-1",
    "page": "Kinematic Bicycle Model",
    "title": "Define and Configure the Problem:",
    "category": "section",
    "text": "configure!(n,Nck=[15,10];(:finalTimeDV=>false),(:tf=>4.0));\nnothing # hide"
},

{
    "location": "tutorials/KinematicBicycle/main.html#additional-information-1",
    "page": "Kinematic Bicycle Model",
    "title": "additional information",
    "category": "section",
    "text": "names=[:x,:y,:psi,:ux];\ndescriptions=[\"X (m)\",\"Y (m)\",\"Yaw Angle (rad)\",\"Longitudinal Velocity (m/s)\"];\nstateNames!(n,names,descriptions)\nnames = [:sr,:jx];\ndescriptions=[\"Steering Angle (rad)\",\"Longitudinal Acceleration (m/s^2)\"];\ncontrolNames!(n,names,descriptions);\nnothing # hide#mXL=Any[false,false,false,false];mXU=Any[false,false,false,-1];  # set to false if you don't want to taper that side #linearStateTolerances(n;mXL=mXL,mXU=mXU);"
},

{
    "location": "tutorials/KinematicBicycle/main.html#Objective-Function-1",
    "page": "Kinematic Bicycle Model",
    "title": "Objective Function",
    "category": "section",
    "text": "x_ref = 10; y_ref = 100; # define target\n@NLobjective(n.mdl, Min, (n.r.x[end,1]-x_ref)^2 + (n.r.x[end,2]-y_ref)^2);\nnothing # hide"
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
    "text": "allPlots(n)"
},

{
    "location": "background/lagrange_poly.html#",
    "page": "Lagrange Interpolating Polynomials",
    "title": "Lagrange Interpolating Polynomials",
    "category": "page",
    "text": ""
},

{
    "location": "background/lagrange_poly.html#Lagrange-Interpolating-Polynomials-1",
    "page": "Lagrange Interpolating Polynomials",
    "title": "Lagrange Interpolating Polynomials",
    "category": "section",
    "text": ""
},

{
    "location": "background/lagrange_poly.html#Definition-1",
    "page": "Lagrange Interpolating Polynomials",
    "title": "Definition",
    "category": "section",
    "text": "given (N+1) unique data points\n* (x_0y_0)(x_1y_1)(x_Ny_N)\nwe can create an N^th order Lagrange interpolating polynomialP_n(x) = sum_i=0^N mathcalL_i(x)f(x_i)where, :   nowrapbegineqnarray       f(x_0) = y_0\n      f(x_1) = y_1\n      \n      \n      f(x_i) = y_i\n      \n      f(x_N) = y_N      endeqnarraySo, we are just multiplying by the given y_i values."
},

{
    "location": "background/lagrange_poly.html#Lagrange-Basis-Polynomials-1",
    "page": "Lagrange Interpolating Polynomials",
    "title": "Lagrange Basis Polynomials",
    "category": "section",
    "text": "More information on Lagrange Basis Polynomials is heremathcalL_i(x)=prod_substackj=0  jneq i^Nfracx-x_jx_i-x_jso expanding this, :   nowrapbegineqnarray     mathcalL_i(x) =fracx-x_0x_i-x_0fracx-x_1x_i-x_1\n                     fracx-x_i-1x_i-x_i-1\n                     fracx-x_i+1x_i-x_i+1\n                     fracx-x_Nx_i-x_N     endeqnarrayNotice that we do not include the term where i==j!Please see lpf for details on implementation."
},

{
    "location": "background/ocp.html#",
    "page": "Optimal Control Problem Definition",
    "title": "Optimal Control Problem Definition",
    "category": "page",
    "text": ""
},

{
    "location": "background/ocp.html#Optimal-Control-Problem-Definition-1",
    "page": "Optimal Control Problem Definition",
    "title": "Optimal Control Problem Definition",
    "category": "section",
    "text": ""
},

{
    "location": "background/time_marching.html#",
    "page": "Time Marching Methods",
    "title": "Time Marching Methods",
    "category": "page",
    "text": ""
},

{
    "location": "background/time_marching.html#Time-Marching-Methods-1",
    "page": "Time Marching Methods",
    "title": "Time Marching Methods",
    "category": "section",
    "text": ""
},

{
    "location": "background/time_marching.html#Euler-Method-1",
    "page": "Time Marching Methods",
    "title": "Euler Method",
    "category": "section",
    "text": ""
},

{
    "location": "background/time_marching.html#Trapezoidal-Method-1",
    "page": "Time Marching Methods",
    "title": "Trapezoidal Method",
    "category": "section",
    "text": ""
},

{
    "location": "background/pseudospectral_methods.html#",
    "page": "Pseudospectral Methods",
    "title": "Pseudospectral Methods",
    "category": "page",
    "text": ""
},

{
    "location": "background/pseudospectral_methods.html#Pseudospectral-Methods-1",
    "page": "Pseudospectral Methods",
    "title": "Pseudospectral Methods",
    "category": "section",
    "text": ""
},

{
    "location": "background/pseudospectral_methods.html#Change-of-Interval-1",
    "page": "Pseudospectral Methods",
    "title": "Change of Interval",
    "category": "section",
    "text": "To can change the limits of the integration (in order to apply Quadrature), we introduce tau in -1+1 as a new independent variable and perform a change of variable for t in terms of tau, by defining:tau = frac2t_N_t-t_0t - fract_N_t+t_0t_N_t-t_0"
},

{
    "location": "background/pseudospectral_methods.html#Polynomial-Interpolation-1",
    "page": "Pseudospectral Methods",
    "title": "Polynomial Interpolation",
    "category": "section",
    "text": "Select a set of N_t+1 node points:mathbftau = tau_0tau_1tau_2tau_N_tThese none points are just numbers\nIncreasing and distinct numbers in -1+1A unique polynomial P(tau) exists (i.e. exists P(tau)) of a maximum degree of N_t where:f(tau_k)=P(tau_k)k=012N_tSo, the function evaluated at tau_k is equivalent the this   polynomial evaluated at that point.But, between the intervals, we must approximate f(tau) as:f(tau) approx P(tau)= sum_k=0^N_tf(tau_k)phi_k(tau)with phi_k() are basis polynomials that are built by interpolating f(tau) at the node points."
},

{
    "location": "background/pseudospectral_methods.html#Approximating-Derivatives-1",
    "page": "Pseudospectral Methods",
    "title": "Approximating Derivatives",
    "category": "section",
    "text": "We can also approximate the derivative of a function f(tau) as:fracmathrmdf(tau)mathrmdtau=dotf(tau_k)approxdotP(tau_k)=sum_i=0^N_tD_kif(tau_i)With mathbfD is a (N_t+1)times(N_t+1) differentiation matrix that depends on:values of tau\ntype of interpolating polynomialNow we have an approximation of dotf(tau_k) that depends only on f(tau)!"
},

{
    "location": "background/pseudospectral_methods.html#Approximating-Integrals-1",
    "page": "Pseudospectral Methods",
    "title": "Approximating Integrals",
    "category": "section",
    "text": "The integral we are interested in evaluating is:int_t_0^t_N_tf(t)mathrmdt=fract_N_t-t_02int_-1^1f(tau_k)mathrmdtauThis can be approximated using quadrature:int_-1^1f(tau_k)mathrmdtausum_k=0^N_tw_kf(tau_k)where w_k are quadrature weights and depend only on:values of tau\ntype of interpolating polynomial"
},

{
    "location": "background/pseudospectral_methods.html#Legendre-Pseudospectral-Method-1",
    "page": "Pseudospectral Methods",
    "title": "Legendre Pseudospectral Method",
    "category": "section",
    "text": "PolynomialDefine an N order Legendre polynomial as:L_N(tau) = frac12^NNfracmathrmd^nmathrmdtau^N(tau^2-1)^NNodesnowrapbeginequation\n  tau_k = left \n  beginaligned\n    -1  textif k=0 \n    textkthtextrootof dotL_N_t(tau)  textif k = 1 2 3  N_t-1\n    +1  textif k = N_t\n  endaligned right\nendequationDifferentiation Matrix\nInterpolating Polynomial Function"
},

{
    "location": "background/hp_psuedospectral.html#",
    "page": "hp-psuedospectral method",
    "title": "hp-psuedospectral method",
    "category": "page",
    "text": ""
},

{
    "location": "background/hp_psuedospectral.html#hp-psuedospectral-method-1",
    "page": "hp-psuedospectral method",
    "title": "hp-psuedospectral method",
    "category": "section",
    "text": "To solve the integral constraints within the optimal control problem we employs the hp-pseudospectral method. The hp-psuedospectral method is an form of Gaussian Quadrature, which uses multi-interval collocation points."
},

{
    "location": "background/hp_psuedospectral.html#Single-Phase-Optimal-Control-1",
    "page": "hp-psuedospectral method",
    "title": "Single Phase Optimal Control",
    "category": "section",
    "text": "Find:The state: mathbfx(t)\nThe control: mathbfu(t)\nThe integrals: mathbfq\nThe initial time: t_0\nThe final time: t_fTo Minimize: :   J = Phi(mathbfx(t_0)mathbfx(t_f)mathbfqt_0t_f)That Satisfy the Following Constraints:Dynamic Constraints:fracmathrmdmathbfxmathrmdt = mathbfpsi(mathbfx(t)mathbfu(t)t)Inequality Path Constraints:mathbfc_min = mathbfc(mathbfx(t)mathbfu(t)t) = mathbfc_maxIntegral Constraints:q_i = int_t_0^t_f Upsilon_i(mathbfx(t)mathbfu(t)t) mathrmdt(i=1n_q)Event Constraints:mathbfb_min = mathbfb(mathbfx(t_0)mathbfx(t_f)t_fmathbfq) = mathbfb_max"
},

{
    "location": "background/hp_psuedospectral.html#Change-of-Interval-1",
    "page": "hp-psuedospectral method",
    "title": "Change of Interval",
    "category": "section",
    "text": "To can change the limits of the integration (in order to apply Quadrature), we introduce tau in -1+1 as a new independent variable and perform a change of variable for t in terms of tau, by defining:t = fract_f - t_02tau + fract_f + t_02The optimal control problem defined above (TODO: figure out equation references), is now redefined in terms of tau as:Find:The state: mathbfx(tau)\nThe control: mathbfu(tau)\nThe integrals: mathbfq\nThe initial time: t_0\nThe final time: t_fTo Minimize: :   J = Phi(mathbfx(-1)mathbfx(+1)mathbfqt_0t_f)That Satisfy the Following Constraints:Dynamic Constraints:fracmathrmdmathbfxmathrmdtau = fract_f-t_02 mathbfpsi(mathbfx(tau)mathbfu(tau)taut_0t_f)Inequality Path Constraints:mathbfc_min = mathbfc(mathbfx(tau)mathbfu(tau)taut_0t_f) = mathbfc_maxIntegral Constraints:q_i = fract_f-t_02 int_-1^+1 Upsilon_i(mathbfx(tau)mathbfu(tau)taut_0t_f) mathrmdtau(i=1n_q)Event Constraints:mathbfb_min = mathbfb(mathbfx(-1)mathbfx(+1)t_fmathbfq) = mathbfb_max"
},

{
    "location": "background/hp_psuedospectral.html#Divide-The-Interval-\\tau-\\in-[-1,1]-1",
    "page": "hp-psuedospectral method",
    "title": "Divide The Interval tau in -1+1",
    "category": "section",
    "text": "The interval tau in -1+1 is now divided into a mesh of K mesh intervals as: :   T_k-1T_k k = 1T_Kwith (T_0T_K) being the mesh points; which satisfy: :   -1 = T_0  T_1  T_2  T_3    T_K-1  T_K = T_f = +1"
},

{
    "location": "background/hp_psuedospectral.html#Rewrite-the-Optimal-Control-Problem-using-the-Mesh-1",
    "page": "hp-psuedospectral method",
    "title": "Rewrite the Optimal Control Problem using the Mesh",
    "category": "section",
    "text": "Find:The state : mathbfx^(k)(tau) in mesh interval k\nThe control: mathbfu^(k)(tau) in mesh interval k\nThe integrals: mathbfq\nThe initial time: t_0\nThe final time: t_fTo Minimize: :   J = Phi(mathbfx^(1)(-1)mathbfx^(K)(+1)mathbfqt_0t_f)That Satisfy the Following Constraints:Dynamic Constraints:fracmathrmdmathbfx^(k)(tau^(k))mathrmdtau^(k) = fract_f-t_02 mathbfpsi(mathbfx^(k)(tau^(k))mathbfu^(k)(tau^(k))tau^(k)t_0t_f)(k=1K)Inequality Path Constraints:mathbfc_min = mathbfc(mathbfx^(k)(tau^(k))mathbfu^(k)(tau^(k))tau^(k)t_0t_f) = mathbfc_max(k=1K)Integral Constraints:q_i = fract_f-t_02 displaystylesum_k=1^K int_T_k-1^T_k Upsilon_i(mathbfx^(k)(tau^(k))mathbfu^(k)(tau^(k))taut_0t_f) mathrmdtau(i=1n_q k=1K)Event Constraints:mathbfb_min = mathbfb(mathbfx^(1)(-1)mathbfx^(K)(+1)t_fmathbfq) = mathbfb_maxState Continuity\nAlso, we must now constrain the state to be continuous at   each interior mesh point (T_1T_k-1) by enforcing:\nmathbfy^k(T_k) = mathbfy^k+1(T_k)"
},

{
    "location": "background/hp_psuedospectral.html#Optimal-Control-Problem-Approximation-1",
    "page": "hp-psuedospectral method",
    "title": "Optimal Control Problem Approximation",
    "category": "section",
    "text": "The optimal control problem will now be approximated using the Radau Collocation Method as which follows the description provided by b-garg2011advances. In collocation methods, the state and control are discretized at particular points within the selected time interval. Once this is done the problem can be transcribed into a nonlinear programming problem (NLP) and solved using standard solvers for these types of problems, such as IPOPT or KNITRO.For each mesh interval kin1K: :   nowrapbegineqnarray      mathbfx^(k)(tau)approxmathbfX^(k)(tau)=displaystylesum_j=1^N_k+1mathbfX_j^(k)fracmathrmdmathcalL_j^k(tau)mathrmdtau\n      where\n     mathcalL_j^k(tau)=prod_substackl=1  lneq j^N_k+1fractau-tau_l^(k)tau_j^(k)-tau_l^(k)\n           and\n           D_ki=dotmathcalL_i(tau_k)=fracmathrmdmathcalL_j^k(tau)mathrmdtau         endeqnarrayalso, :   -   mathcalL_j^(k)(tau)(j=1N_k+1) is a basis of         Lagrange polynomials     -   (tau_1^ktau_N_k^(k)) are the         Legendre-Gauss-Radau collocation points in mesh interval k    > -   defined on the subinterval $\\tau^{(k)}\\in[T_{k-1},T_k]$\n    > -   $\\tau_{N_k+1}^{(k)}=T_k$ is a noncollocated pointA basic description of Lagrange Polynomials is presented in lagrange_polyThe mathbfD matrix: :   -   Has a size = N_ctimesN_c+1         :   -   with (1=k=N_c) (1=i=N_c+1)             -   this non-square shape because the state approximation uses the N_c+1 points:                 :   (tau_1tau_N_c+1)        -   but collocation is only done at the $N_c$ LGR points:\n            :   $(\\tau_1,...\\tau_{N_c})$If we define the state matrix as:nowrapbeginequation\n  mathbfX^LGR= left \n  beginaligned\n    mathbfX_1\n    \n            \n            \n    mathbfX_N_c+1\n  endaligned  right\nendequationThe dynamics are collocated at the N_c LGR points using:mathbfD_kmathbfX^LGR = frac(t_f-t_0)2mathbff(mathbfX_kmathbfU_ktaut_0t_f)fork = 1Ncwith, :   -   mathbfD_k being the k^th row of the mathbfD         matrix.References"
},

{
    "location": "functions/NLOptControl.html#",
    "page": "NLOptControl.jl",
    "title": "NLOptControl.jl",
    "category": "page",
    "text": ""
},

{
    "location": "functions/NLOptControl.html#NLOptControl.configure!-Tuple{NLOptControl.NLOpt,Vararg{Any,N}}",
    "page": "NLOptControl.jl",
    "title": "NLOptControl.configure!",
    "category": "Method",
    "text": "configure!(n,Ni=4,Nck=[3, 3, 7, 2];(:integrationMethod => :ps),(:integrationScheme => :lgrExplicit),(:finalTimeDV => false),(:tf => 1))\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 1/1/2017, Last Modified: 5/29/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/NLOptControl.html#NLOptControl.define!-Tuple{}",
    "page": "NLOptControl.jl",
    "title": "NLOptControl.define!",
    "category": "Method",
    "text": "n=define!(;numStates=2,numControls=1,X0=[0.,1],XF=[0.,-1.],XL=[0.,-Inf],XU=[1/9,Inf],CL=[-Inf],CU=[Inf])\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 1/1/2017, Last Modified: 5/29/2017 \n\nCitations: \n\n\n\nInitially Influenced by: S. Hughes.  steven.p.hughes@nasa.gov Source: DecisionVector.m located here ––––––––––––––––––––––––––––––––––––––––––-\n\n\n\n"
},

{
    "location": "functions/NLOptControl.html#NLOptControl.defineSolver!-Tuple{NLOptControl.NLOpt}",
    "page": "NLOptControl.jl",
    "title": "NLOptControl.defineSolver!",
    "category": "Method",
    "text": "defineSolver!(n;(:name=>:Ipopt))\n\nTo debug KNITRO turn up the output level\n\nTry to tune KNITRO\n\n\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 2/9/2017, Last Modified: 5/29/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/NLOptControl.html#NLOptControl.defineTolerances!-Tuple{NLOptControl.NLOpt}",
    "page": "NLOptControl.jl",
    "title": "NLOptControl.defineTolerances!",
    "category": "Method",
    "text": "defineTolerances!(n)\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 2/8/2017, Last Modified: 2/8/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/NLOptControl.html#NLOptControl.evalMaxDualInf-Tuple{NLOptControl.NLOpt}",
    "page": "NLOptControl.jl",
    "title": "NLOptControl.evalMaxDualInf",
    "category": "Method",
    "text": "maxDualInf = evalMaxDualInf(n)\n\nfuntionality to evaluate maximum dual infeasibility of problem\n\n\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 2/13/2017, Last Modified: 2/13/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/NLOptControl.html#NLOptControl.integrate!-Tuple{NLOptControl.NLOpt,Array{JuMP.Variable,1},Vararg{Any,N}}",
    "page": "NLOptControl.jl",
    "title": "NLOptControl.integrate!",
    "category": "Method",
    "text": "for integrating JuMP variables\n\nExpr=integrate!(n,u;(:mode=>:control)) Expr=integrate!(n,u,idx=1;C=0.5,(:variable=>:control),(:integrand=>:squared)) Expr=integrate!(n,n.r.u[:,1];D=rand(n.numStatePoints),(:variable=>:control),(:integrand=>:squared),(:integrandAlgebra=>:subtract)) #TODO fix D  ::Array{JuMP.NonlinearParameter,1} –––––––––––––––––––––––––––––––––––––––––––\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 1/2/2017, Last Modified: 5/29/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/NLOptControl.html#NLOptControl.linearStateTolerances!-Tuple{NLOptControl.NLOpt}",
    "page": "NLOptControl.jl",
    "title": "NLOptControl.linearStateTolerances!",
    "category": "Method",
    "text": "linearStateTolerances!(n)\n\nthe purpose of this function is to taper the tolerances on the constant state constraints\n\nthe idea is that when doing MPC, the final states are well within the bounds so that the next optimization is not initalized at an infeasible point\n\nif you want a constant bond, set the slope to zero\n\ndefault is a positive slope on the lower bound and a negative slope on the upper bound\n\nthis functionality in not needed for states like position, so you do not need to add a linearStateTol for all states\n\n\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 3/23/2017, Last Modified: 3/25/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/NLOptControl.html#NLOptControl.maxDF-Tuple{Any,Any}",
    "page": "NLOptControl.jl",
    "title": "NLOptControl.maxDF",
    "category": "Method",
    "text": "\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 12/8/2016, Last Modified: 3/29/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/NLOptControl.html#NLOptControl.minDF-Tuple{Any,Any}",
    "page": "NLOptControl.jl",
    "title": "NLOptControl.minDF",
    "category": "Method",
    "text": "maximum(x->maximum(x[:A]), dfs) -> consider\n\nmaximum(x->maximum(filter(y->y !== nothing, x[:A])), dfs)\n\nminimum(x->maximum(filter(y->y !== nothing, x[:t])), dfs)\n\n\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 12/8/2016, Last Modified: 3/29/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/NLOptControl.html#NLOptControl.resultsDir!-Tuple{Any}",
    "page": "NLOptControl.jl",
    "title": "NLOptControl.resultsDir!",
    "category": "Method",
    "text": "description = string( \" *    \")\n\nresultsDir!(r;results_name,description=description)\n\nremoves results folder and creates a new one\n\nTODO consider putting in a warning or some sort of an interaction with user\n\n\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 3/26/2017, Last Modified: 5/29/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/NLOptControl.html#NLOptControl.savePlantData!-Tuple{Any}",
    "page": "NLOptControl.jl",
    "title": "NLOptControl.savePlantData!",
    "category": "Method",
    "text": "\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 3/26/2017, Last Modified: 4/27/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/NLOptControl.html#NLOptControl.jl-1",
    "page": "NLOptControl.jl",
    "title": "NLOptControl.jl",
    "category": "section",
    "text": "The following link provides documentation all of the exported NLOptControl.jl functions:Modules = [NLOptControl]\nPrivate = false\nOrder = [:function]\nDepth = 2"
},

{
    "location": "functions/VehicleModels.html#",
    "page": "VehicleModels.jl",
    "title": "VehicleModels.jl",
    "category": "page",
    "text": ""
},

{
    "location": "functions/VehicleModels.html#VehicleModels.KinematicBicycle-Tuple{Any,Array{T,2},Array{T,2}}",
    "page": "VehicleModels.jl",
    "title": "VehicleModels.KinematicBicycle",
    "category": "Method",
    "text": "dx=KinematicBicycle(n,x,u)\n\nOriginal Authors: BARC Project, Berkely MPC Laboratory -> https://github.com/MPC-Berkeley/barc Modified for NLOptControl.jl by: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 2/9/2017, Last Modified: 5/31/2017 \n\n\n\nthis vehicle model is controlled using steering angle and longitudinal acceleration\n\n\n\n"
},

{
    "location": "functions/VehicleModels.html#VehicleModels.ThreeDOFv1-Tuple{Any,Array{T,2},Array{T,2}}",
    "page": "VehicleModels.jl",
    "title": "VehicleModels.ThreeDOFv1",
    "category": "Method",
    "text": "dx = ThreeDOFv1(n,x,u)\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 10/20/2017, Last Modified: 5/31/2017 \n\n\n\nthis vehicle model is controlled using steering angle and speed\n\n\n\n"
},

{
    "location": "functions/VehicleModels.html#VehicleModels.ThreeDOFv1-Tuple{VehicleModels.Vpara,Array{T,1},Array{T,1},Array{T,2},Float64,Float64}",
    "page": "VehicleModels.jl",
    "title": "VehicleModels.ThreeDOFv1",
    "category": "Method",
    "text": "\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 10/01/2016, Last Modified: 4/4/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/VehicleModels.html#VehicleModels.ThreeDOFv2-Tuple{Any,Array{T,2},Array{T,2}}",
    "page": "VehicleModels.jl",
    "title": "VehicleModels.ThreeDOFv2",
    "category": "Method",
    "text": "dx = ThreeDOFv2(n,x,u)\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 10/20/2017, Last Modified:  5/31/2017 \n\n\n\nthis vehicle model is controlled using steering rate and longitudinal jerk\n\n\n\n"
},

{
    "location": "functions/VehicleModels.html#VehicleModels.ThreeDOFv2-Tuple{VehicleModels.Vpara,Array{T,1},Array{T,1},Array{T,2},Float64,Float64}",
    "page": "VehicleModels.jl",
    "title": "VehicleModels.ThreeDOFv2",
    "category": "Method",
    "text": "\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 10/01/2016, Last Modified: 4/11/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/VehicleModels.html#VehicleModels.jl-1",
    "page": "VehicleModels.jl",
    "title": "VehicleModels.jl",
    "category": "section",
    "text": "The following link provides documentation all of the exported VehicleModels.jl functions:Modules = [VehicleModels]\nPrivate = false\nOrder = [:function]\nDepth = 2"
},

{
    "location": "functions/PrettyPlots.html#",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.jl",
    "category": "page",
    "text": ""
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.allPlots-Tuple{NLOptControl.NLOpt}",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.allPlots",
    "category": "Method",
    "text": "allPlots(n;idx)\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 2/10/2017, Last Modified: 5/29/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.controlPlot-Tuple{NLOptControl.NLOpt,Int64,Int64,Vararg{Any,N}}",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.controlPlot",
    "category": "Method",
    "text": "ctrp=controlPlot(n,idx,ctr); ctrp=controlPlot(n,idx,ctr,ctrp;(:append=>true));\n\nto plot control signals\n\n\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 2/10/2017, Last Modified: 5/28/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.currentSettings-Tuple{}",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.currentSettings",
    "category": "Method",
    "text": "currentSettings()\n\nshow the current plot settings\n\n\n\n"
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.mainSim-Tuple{Any,Any,Any}",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.mainSim",
    "category": "Method",
    "text": "mainSim(n,c,pa;(:mode=>:open1))\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 4/13/2017, Last Modified: 5/1/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.obstaclePlot-Tuple{Any,Any,Any,Vararg{Any,N}}",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.obstaclePlot",
    "category": "Method",
    "text": "to visualize the current obstacle in the field\n\nobstaclePlot(n,c)\n\nto run it after a single optimization\n\npp=obstaclePlot(n,c,1);\n\nto create a new plot\n\npp=obstaclePlot(n,c,idx);\n\nto add to an exsting position plot\n\npp=obstaclePlot(n,c,idx,pp;(:append=>true));\n\nposterPlot\n\npp=obstaclePlot(n,c,ii,pp;(:append=>true),(:posterPlot=>true)); # add obstacles\n\n\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 3/11/2017, Last Modified: 4/3/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.plotSettings-Tuple{}",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.plotSettings",
    "category": "Method",
    "text": "plotSettings(;(:simulate=>true)) plotSettings(;(:mpc_lines   =>[(4.0,:blueviolet,:solid),(4.0,:blueviolet,:dash)]),               (:plant_lines =>[(3.0,:darkgreen,:solid),(3.0,:darkgreen,:solid)]),               (:limit_lines =>[(2.0,:turquoise,:solid),(2.0,:violet,:solid),(2.0,:orchid,:solid),(2.0,:darksalmon,:solid)]),               (:size=>(1000,1000))              ) plotSettings(;(:obstacle_marker =>(:circle,:red,10.0,1.0)),                   (:goal_marker=>(:circle,:green,10.0,1.0))              )  plotSettings(;(:mpc_lines =>[(4.0,:blueviolet,:solid)]),(:size=>(700,700)))\n\nthis function can be called to modify the default settings in PrettyPlots.jl\n\ncheck out Colors.jl for an incredible amount of colors!\n\n\n\n"
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.posPlot-Tuple{Any,Any,Any}",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.posPlot",
    "category": "Method",
    "text": "to plot the second solution\n\npp=posPlot(n,c,2) pp=posPlot(n,c,idx) –––––––––––––––––––––––––––––––––––––––––––\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 3/28/2017, Last Modified: 5/1/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.posterP-Tuple{Any,Any,Any}",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.posterP",
    "category": "Method",
    "text": "default(guidefont = font(17), tickfont = font(15), legendfont = font(12), titlefont = font(20)) s=Settings(;save=true,MPC=true,simulate=false,format=:png,plantOnly=true); posterP(n,c,pa) –––––––––––––––––––––––––––––––––––––––––––\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 4/13/2017, Last Modified: 4/13/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.statePlot-Tuple{NLOptControl.NLOpt,Int64,Int64,Int64,Vararg{Any,N}}",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.statePlot",
    "category": "Method",
    "text": "stp=statePlot(n,idx,st1,st2); stp=statePlot(n,idx,st1,st2;(:legend=>\"test1\")); stp=statePlot(n,idx,st1,st2,stp;(:append=>true),(:lims=>false));\n\nto compare two different states\n\n\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 2/10/2017, Last Modified: 5/28/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.statePlot-Tuple{NLOptControl.NLOpt,Int64,Int64,Vararg{Any,N}}",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.statePlot",
    "category": "Method",
    "text": "stp=statePlot(n,r.eval_num,7); stp=statePlot(n,idx,st); stp=statePlot(n,idx,st;(:legend=>\"test1\")); stp=statePlot(n,idx,st,stp;(:append=>true)); –––––––––––––––––––––––––––––––––––––––––––\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 2/10/2017, Last Modified: 5/28/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.tPlot-Tuple{NLOptControl.NLOpt,Int64,Vararg{Any,N}}",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.tPlot",
    "category": "Method",
    "text": "tp=tPlot(n,r,idx) tp=tPlot(n,r,idx,tp;(:append=>true))\n\nplot the optimization times\n\nthis is an MPC plot\n\n\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 3/11/2017, Last Modified: 3/11/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.trackPlot-Tuple{Any,Vararg{Any,N}}",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.trackPlot",
    "category": "Method",
    "text": "to visualize the current track in the field\n\ntrackPlot(c)\n\npp=trackPlot(c,pp;(:append=>true));\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 3/28/2017, Last Modified: 5/1/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.vtPlot-Tuple{NLOptControl.NLOpt,VehicleModels.Vpara,Any,Int64}",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.vtPlot",
    "category": "Method",
    "text": "vt=vtPlot(n,pa,c,idx)\n\nAuthor: Huckleberry Febbo, Graduate Student, University of Michigan Date Create: 3/11/2017, Last Modified: 3/11/2017 \n\n\n\n\n\n"
},

{
    "location": "functions/PrettyPlots.html#PrettyPlots.jl-1",
    "page": "PrettyPlots.jl",
    "title": "PrettyPlots.jl",
    "category": "section",
    "text": "The following link provides documentation all of the exported PrettyPlots.jl functions:Modules = [PrettyPlots]\nPrivate = false\nOrder = [:function]\nDepth = 2"
},

]}
