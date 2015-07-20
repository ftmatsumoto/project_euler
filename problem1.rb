def sum_multiples(multiple, to)
    n = (to-1) / multiple
    n * (n+1) / 2 * multiple
end

puts sum_multiples(3, 1000) + sum_multiples(5, 1000) - sum_multiples(15, 1000)
