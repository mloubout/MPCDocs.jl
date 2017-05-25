Pkg.add("Ipopt")
Pkg.build("Ipopt")
#Pkg.add("PGFPlots")
#Pkg.add("PyPlot");Pkg.build("PyPlot")
Pkg.add("GR"); Pkg.build("GR")

using Documenter,MPCDocs,NLOptControl,PrettyPlots,VehicleModels

makedocs(modules=[NLOptControl,PrettyPlots,VehicleModels],
        doctest=false, clean=true,
        format =:html,
        authors="Huckleberry Febbo",
        sitename="NLOptControl.jl",
        pages = Any[
        "Home" => "index.md"
        ])
#=
makedocs(modules=[NLOptControl,PrettyPlots,VehicleModels],
        doctest=false, clean=true,
        format =:html,
        authors="Huckleberry Febbo",
        sitename="NLOptControl.jl",
        pages = Any[
        "Home" => "index.md",
        "Tutorials" => Any[
          "tutorials/MoonLander/MoonLander.md"
         ]
         ])
=#
deploydocs(
    deps=Deps.pip("mkdocs","python-markdown-math"),
    repo="github.com/JuliaMPC/MPCDocs.jl.git",
    target="build",
    osname="linux",
    julia="0.5",
    make=nothing)