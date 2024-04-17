# End Tree
## Overview
An end tree specifies what ends need to be attained for the attainment of a parent end.

An end is a goal, an objective to be attained. The meaning of the term differs here to its everyday sense. Here it is not so much the act of desiring or the desire itself than the object being desired. For instance, if the desire is _I want to drink water_, then the end here is _water_.

An end may have children. A child is an end that has to be attained before its parent, if the parent is to be attained.

An end may have siblings. A sibling is an alternative to each other in terms of the order of attainment. The attainment of an end must not depend on the attainment of its siblings. Therefore, no specific order must necessarily be followed.

In the tree, each line is an end. Ends on the same depth are siblings, whereas those on a lower depth are children to the end immediately above it.

The specification of an end may include also the identifier of the handler as well as its status.

A status may be either in-progress, done, or abandoned.

Ideally, an end tree must identify every end required for the attainment of the primary end, but this is impossible, and isn't very beneficial anyway. It should be enough to identify only the ends which identification result in more benefit than cost.

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
