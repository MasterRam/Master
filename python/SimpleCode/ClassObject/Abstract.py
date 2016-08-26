from abc import ABCMeta, abstractmethod

# class Animal:
    # __metaclass__ = ABCMeta

    # @abstractmethod
    # def say_something(self): pass

# class Cat(Animal):
    # def say_something(self):
        # return "Miauuu!"
		

class Animal:
    __metaclass__ = ABCMeta

    @abstractmethod
    def say_something(self):
          return "I'm an animal!"

class Cat(Animal):
    def say_something(self):
        s = super(Cat, self).say_something()
        return "%s - %s" % (s, "Miauuu")
		
class Abstract(object):
    def foo(self):
        raise NotImplementedError('subclasses must override foo()!')

class Derived(Abstract):
    def foo(self):
        print 'Hooray!'