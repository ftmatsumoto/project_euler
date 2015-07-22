class Fibo
  class << self
    include Enumerable

    def each
      return to_enum unless block_given?
      a = 0; b = 1
      loop do
        a, b = b, a + b
        yield a
      end
    end
  end
end

puts Fibo.take_while { |i| i < 4000000 }.
          select(&:even?).
          inject(:+)