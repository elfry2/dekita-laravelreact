# End Tree
## Overview
An end tree specifies what ends need to be attained for the attainment of a parent end.

An end in the everyday sense is a goal, an objective to be attained. However, for simplicity, if in its everyday use an end is declared in a verbal sentence like "I want to drink water," or "drinking water is what I want," or "drinking water," here it suffices to declare only the object being desired. For instance, "I want to drink water" may be declared here as "water". Therefore, upon being asked "what do you want?", one may here, for instance, reply "water."

An end may have children. A child is an end that has to be attained before its parent, if the parent is to be attained.

An end may have siblings. A sibling is an alternative to each other in terms of the order of attainment. The attainment of an end must not depend on the attainment of its siblings. Therefore, no specific order must necessarily be followed.

In the tree, each line is an end. Ends on the same depth are siblings, whereas those on a lower depth are children to the end immediately above it.

The declaration of an end may include also the identifier of the handler as well as its status.

A status may be either in-progress, done, or abandoned.

Ideally, an end tree must declare every end required for the attainment of the primary end, but this is impossible, and isn't very beneficial anyway. It should be enough to declare only the ends which declaration result in more benefit than cost.

## Content
the output as described in [description.md](description.md)\
_user management\
__authorisation\
___auth (elfry2, in-progress)\
_cash flow\
__authorisation\
_product management\
__authorisation\
_sales\
__buy\
___authorisation\
__return\
___authorisation\
__sell\
___auth
