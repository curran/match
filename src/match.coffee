# This library provides a pattern matching utility function, `match`,
# which implements Haskell-like pattern matching found in many functional
# programming languages.
#
# Curran Kelleher
# December 2014

# Returns a function that can be evaluted recursively on nodes in 
# a tree structure. The function dispatches to handlers that match on
# values of a certain property.
#
# Arguments:
#
#  * `property` The name of the property to match on.
#  * `fns` An object where
#    * keys are values of the property to match on, and
#    * values are functions
Match = (property, fns) ->
  (obj) ->
    fn = fns[obj[property]]
    if fn
      fn.apply null, arguments
    else
      throw Error "no match for #{property} == #{obj[property]}"
